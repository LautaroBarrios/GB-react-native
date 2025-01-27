import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    color: "#0f1729",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffff00",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  buttonCreate: {
    width:35,
    height:35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#0f1729",
  },
});
