import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 10,
    },    
    ratingContainer: {
        marginLeft: '50%'
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold'
    },
    picker: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        width: 120,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    description:{
        marginVertical: 10,
        lineHeight: 20
    },
})

export default styles;