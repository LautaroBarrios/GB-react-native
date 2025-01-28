import { Pressable, Text, View } from "react-native";
import { Plus } from "../icons";
import { styles } from "../styles";

export const Header = ({ title, functionPress }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        style={styles.buttonCreate}
        onPress={functionPress} // Cambiado a `onPress`
        className="active:scale-95 transition-all"
      >
        <Plus />
      </Pressable>
    </View>
  );
};

