import React from "react";
import { View } from "react-native";
import Styles  from "./style";
import ProductItem  from '../../components/ProductItem';

import products from "../../../assets/data/products";

const HomeScreen = () => {
  return (
    <View style={Styles.container}>
      <ProductItem item={products[0]}/>
      <ProductItem item={products[1]}/>
      <ProductItem item={products[2]}/>
      <ProductItem item={products[3]}/>    
       
      
    </View>
  );
};

export default HomeScreen;
