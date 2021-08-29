import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    root: {                
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginVertical: 5,
    },
    row:{
        flexDirection: 'row',
        marginLeft: 10,
    },
    rightContainer: {
        padding: 10,        
        flex: 3,
        
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18,
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
    raitingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    star: {
        margin: 2,
    },
    quantityContainer:{
        marginLeft: 10,
        marginBottom: 10,
    },
    optionButton:{
        width: 80,
        height: 30,
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#d1d1d1',
        borderRadius: 5,
    },
})

export default Styles;