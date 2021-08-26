import React from "react";
import { View, FlatList } from "react-native";
import ProductItem  from '../../components/ProductItem';

import products from "../../../assets/data/products";

const HomeScreen = () => {
  return (
    <View style={{padding: 10}}>
      <FlatList 
        data={products}
        renderItem={({item}) => <ProductItem item={item}/>}
        
      />
      
    </View>
  );
};

export default HomeScreen;
