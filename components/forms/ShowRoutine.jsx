import { Text, View, Pressable } from "react-native";
import { styles } from "../../styles/index";

export const ShowRoutine = ({
  item,
  handleDeleteRoutine,
  handleStartEditing,
}) => {
  return (
    <View style={styles.cardRoutine}>
      <View style={styles.cell}>
        <Text style={styles.text}>
          {item.ejercicio ? item.ejercicio : "---"}
        </Text>
      </View>

      <View style={styles.cell}>
        <Text style={styles.text}>{item.series ? item.series : "---"}</Text>
      </View>

      <View style={styles.cell}>
        <Text style={styles.text}>
          {item.repeticiones ? item.repeticiones : "---"}
        </Text>
      </View>
      <View style={styles.cellOptions}>
        <Pressable
          style={styles.button}
          className="active:scale-95 hover:bg-green-500"
          onPress={() => handleStartEditing(item)}
        >
          <Text style={styles.textButton}>Editar</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          className="active:scale-95 hover:bg-red-500"
          onPress={() => handleDeleteRoutine(item.id)}
        >
          <Text style={styles.textButton}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};
