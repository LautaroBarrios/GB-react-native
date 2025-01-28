import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "../components/Header";

export function Exercices() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      className="flex justify-start items-start w-full h-full"
    >
      <Header title={"Ejercicios"} onPress={"vacio"}/>
    </View>
  );
}
