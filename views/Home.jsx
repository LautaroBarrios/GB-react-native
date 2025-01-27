import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ButtonAlert } from "../components/ButtonAlert";
import { styles } from "../styles/index";

export function Home() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {/* <ActivityIndicator size="large" color="yellow" /> */}
      <Text style={{ ...styles.title, color: "white" }}>Hi!</Text>
      <ButtonAlert data={[1, 2, 3]} />
    </View>
  );
}
