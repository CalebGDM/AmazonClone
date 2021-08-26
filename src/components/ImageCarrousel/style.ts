import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    root:{
        
    },
    image:{
        margin: 10,
        width: Dimensions.get("window").width - 40,
        height:250,
        resizeMode: 'contain',
    },
    dotContainer:{
        flexDirection: 'row' ,
        justifyContent: 'center',       
        
    },
    dot:{        
       width: 15,
       height: 15,
       borderRadius: 15,
       margin: 5,
       borderWidth: 1,
       borderColor: '#c9c9c9',
       backgroundColor: '#ededed'
    },
    dotCurrent:{
        backgroundColor: 'gray'
    },
})

export default styles;
