import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./style";
import { Picker } from "@react-native-picker/picker";
import QuantitySelector from '../../components/QuantitySelector'

import Button from "../../components/Button";


import product from "../../../assets/data/product";
import ImageCarrousel from "../../components/ImageCarrousel";


const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={styles.container}>
      {/*Raiting*/}
      
      <Text style={styles.title}>{product.title}</Text>
      <ImageCarrousel images={product.images}/>
      <View style={styles.picker}>
        <Picker
          
          selectedValue={selectedOption}
          onValueChange={(itemValue) => setSelectedOption(itemValue)}
        >
      
        {product.options.map((option) => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>
      </View>
      <Text style={styles.price}>
        desde ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </Text>
      
      <Text style={styles.description}>{product.description}</Text>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>

      <Button text={'Add To Cart'} onPress={() => {console.warn('add to cart')}}/>
      <Button text={'Buy Now'} onPress={() => {console.warn('buy now')}} />

      <View>
        <Text>Detalles del producto:</Text>
        <Text style={styles.description}>{product.details}</Text>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
