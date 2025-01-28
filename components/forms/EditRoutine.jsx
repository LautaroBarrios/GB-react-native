import { TextInput, Text, View, Pressable } from "react-native";
import { styles } from "../../styles/index";

export const EditRoutine = ({
  editingRoutine,
  handleEditChange,
  handleSaveEditing,
  handleCancelEditing,
}) => {
  return (
    <View style={styles.cardRoutine}>
      <TextInput
        style={styles.text}
        value={editingRoutine.ejercicio}
        onChangeText={(text) => handleEditChange("ejercicio", text)}
        placeholder="Ejercicio"
      />
      <TextInput
        style={styles.text}
        value={editingRoutine.series}
        onChangeText={(text) => handleEditChange("series", text)}
        placeholder="Series"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.text}
        value={editingRoutine.repeticiones}
        onChangeText={(text) => handleEditChange("repeticiones", text)}
        placeholder="Repeticiones"
        keyboardType="numeric"
      />

      <Pressable style={styles.button} className="active:scale-95" onPress={handleSaveEditing} >
        <Text style={styles.textButton}>Guardar</Text>
      </Pressable>
      <Pressable style={styles.button} className="active:scale-95" onPress={handleCancelEditing} >
        <Text style={styles.textButton}>Cancelar</Text>
      </Pressable>
    </View>
  );
};
