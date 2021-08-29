import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Styles from "./style";
import { FontAwesome } from "@expo/vector-icons";
import QuantitySelector from "../QuantitySelector";
import { Picker } from "@react-native-picker/picker";

interface cartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartProductItem = ({ cartItem }: cartProductItemProps) => {
  const { quantity: quantityProp, option: optionProp, item } = cartItem;

  const [quantity, setQuantity] = useState(quantityProp);
  const [option, setOption] = useState(optionProp);
  console.log(option)

  return (
    <View style={Styles.root}>
      <View style={Styles.row}>
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
      <View style={Styles.row}>
        <View style={Styles.quantityContainer}>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </View>        
        <TouchableOpacity style={Styles.optionButton}>
          <Text>Delete</Text>
        </TouchableOpacity>        
      </View>
    </View>
  );
};

export default CartProductItem;
