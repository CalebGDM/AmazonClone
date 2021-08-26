import React from "react";
import { useState, useCallback } from "react";
import { View, Text, FlatList, Image, useWindowDimensions } from "react-native";
import styles from "./style";

const ImageCarrousel = ({ images }: { images: string[] }) => {
  const windowWidth = useWindowDimensions().width;
  const [activeIndex, setActiveIndex] = useState(0);

  const onFlatlistChange = useCallback(({ viewableItems }) => {
            console.log(viewableItems);
            if(viewableItems.length > 0){
                setActiveIndex(viewableItems[0].index || 0)
            }
            
        }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatlistChange}
      />
      <View style={styles.dotContainer}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor: index == activeIndex ? "#c9c9c9" : "#ededed",
              },
            ]}
          ></View>
        ))}
      </View>
    </View>
  );
};

export default ImageCarrousel;
