import { View, Text, Pressable } from "react-native";
import { styles } from "../styles/index";
import { Plus } from "../icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Exercices() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      className="flex justify-start items-start w-full h-full"
    >
      {/* Contenedor horizontal */}
      <View style={styles.header}>
        <Text style={styles.title}>Ejercicios</Text>
        <Pressable style={styles.buttonCreate} className="active:scale-95 transition-all">
          <Plus />
        </Pressable>
      </View>
    </View>
  );
}
