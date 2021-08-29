import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import CartProductItem from "../../components/CartProductItem";

import products from "../../../assets/data/cart";
import Button from "../../components/Button";

const ShoppingCartScreen = () => {
  const totalPrice = products.reduce(
    (sumedPrice, product) => sumedPrice + product.item.price * product.quantity,
    0
  );

  return (
    <View style={{ padding: 10 }}>
      <View>
        <Text style={styles.subtotal}>
          Subtotal ({products.length} items):{' '}
          <Text style={styles.total}>{totalPrice.toFixed(2)}</Text>
        </Text>
        <Button text='Proceed to checkout' onPress={() => {console.warn('go to ce')}}/>
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    subtotal:{
        fontSize: 18,
        
    },
    total:{
        color: '#e47911',
        fontWeight: 'bold'
    },
})

export default ShoppingCartScreen;
