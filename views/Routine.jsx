import { View, Text } from "react-native";
import { styles } from "../styles/index";
import { Clock } from "../components/Clock";

export function Routine() {
  return (
    <View>
      <Clock />
      {/* <Text style={styles.title}>Rutina!</Text> */}
    </View>
  );
}
