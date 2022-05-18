import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ff0000",
    marginBottom: 20,
  },
  formRow: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ff0000"
  },
  label: {
    fontSize: 18,
    color: "#ff0000",
    padding: 5
  },
  input: {
    fontSize: 18,
    padding: 5,
    width: "80%"
  },
  icon: {
    fontSize: 24,
    color: "#ff0000",
    padding: 10
  }
})

export default styles;