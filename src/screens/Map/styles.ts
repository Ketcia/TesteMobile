import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
     },
     paragraph: {
        fontSize: 18,
        textAlign: "center",
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    posicao:{
        position:"absolute",
        top: 0,
        left:0,
        zIndex: 1,
        widht: "100%",
    },
    google:{
        widht:Dimensions.get("window").width,
    },
    rowSearch:{
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor: "#00ff00",
        borderRadius:10,
        margin:10,
        alignItems:"center",
        widht:"99%",
        height: 65,
    },
    input:{
        widht:"76%"
    },
    icon:{
        fontSize:24,
        padding:5
    }

})

export default styles
    
