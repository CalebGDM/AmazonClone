import React from "react";
import { View, FlatList } from "react-native";
import Styles  from "./style";
import ProductItem  from '../../components/ProductItem';

import products from "../../../assets/data/products";

const HomeScreen = () => {
  return (
    <View style={Styles.container}>
      <FlatList 
        data={products}
        renderItem={({item}) => <ProductItem item={item}/>}
        
      />
      
    </View>
  );
};

export default HomeScreen;
