import { Dimensions,StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#ff00ff"
    },
    centraliza:{
        flex: 1,
        justifyContent: "center",
    },
    scanner:{
        width: Dimensions.get("window").width,
        height:Dimensions.get("window").width,
    }
})

export default styles