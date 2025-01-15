import { StyleSheet, Text, View, ActivityIndicator, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ButtonAlert } from "./ButtonAlert";
import { Logo } from "./Logo";

export function Main() {
  const insets = useSafeAreaInsets();
  console.log(insets);
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ alignItems: "center" }}>
        <Logo />
      </View>
      {/* <ActivityIndicator size="large" color="yellow" /> */}
      <Text className="color-white font-bold text-center text-4xl">Hi!</Text>
      <ButtonAlert data={[1, 2, 3]} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
});
