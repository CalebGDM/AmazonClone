import React from "react";
import { View, Text, Image } from "react-native";
import Styles from "./style";
import { FontAwesome } from "@expo/vector-icons";

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = (props: ProductItemProps) => {
  const { item } = props;

  return (
    <View style={Styles.root}>
      <Image style={Styles.image} source={{ uri: item.image }} />
      <View style={Styles.rightContainer}>
        <Text style={Styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        {/*Raiting*/}
        <View style={Styles.raitingContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              style={Styles.star}
              name={
                i < Math.floor(item.avgRating)
                  ? "star"
                  : i != Math.floor(item.avgRating)
                  ? "star-o"
                  : "star-half-full"
              }
              size={24}
              color="#e47911"
            />
          ))}

          <Text>{item.avgRating}</Text>
        </View>
        <Text style={Styles.price}>
          from ${item.price}
          {item.oldPrice && (
            <Text style={Styles.oldPrice}> ${item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
