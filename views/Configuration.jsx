import { View, Text } from "react-native";
import { styles } from "../styles/index";

export function Configuration() {
  return (
    <View>
      <Text style={{ ...styles.title, color: "white" }}>Configuración!</Text>
    </View>
  );
}
