import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    color: "#0f1729",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  text: {
    color: "#ffff00",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "#0f172a",
    textShadowOffset: { width: -1.5, height: 1.5 },
    textShadowRadius: 1,
  },

  textButton: {
    color: "#0f172a",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  headerTransparent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#324154",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
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

  button: {
    width: 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#ffff00",
  },

  buttonCreate: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#0f1729",
  },

  containerCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  cardRoutine: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#324154",
    padding: 8,
    borderRadius: 5,
    marginVertical: 7,
  },
});
