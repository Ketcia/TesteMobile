import { StyleSheet, Dimensions } from "react-native";

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
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        width: "100%",
    },
    google: {
        width: Dimensions.get("window").width,
    },
    rowsearch:{
        flexDirection: "row",
        justifyContent:"space-between",
        backgroundColor: "#ff00ff",
        borderRadius: 10,
        margin: 10,
        alignItems: "center",
        width:"99%",
        height: 65,
    },
    input: {
        width: "70%",
    },
    icon:{
        fontSize: 24,
        padding: 5,
    },
})

export default styles