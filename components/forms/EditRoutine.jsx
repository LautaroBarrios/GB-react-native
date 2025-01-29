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
      <View style={styles.cell}>
        <TextInput
          style={styles.textInput}
          value={editingRoutine.ejercicio}
          onChangeText={(text) => handleEditChange("ejercicio", text)}
          placeholder="Ejercicio"
        />
      </View>
      <View style={styles.cell}>
        <TextInput
          style={styles.textInput}
          value={editingRoutine.series}
          onChangeText={(text) => handleEditChange("series", text)}
          placeholder="Series"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.cell}>
        <TextInput
          style={styles.textInput}
          value={editingRoutine.repeticiones}
          onChangeText={(text) => handleEditChange("repeticiones", text)}
          placeholder="Repeticiones"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.cellOptions}>
        <Pressable
          style={styles.button}
          className="active:scale-95 hover:bg-green-500"
          onPress={handleSaveEditing}
        >
          <Text style={styles.textButton}>Guardar</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          className="active:scale-95 hover:bg-red-500"
          onPress={handleCancelEditing}
        >
          <Text style={styles.textButton}>Cancelar</Text>
        </Pressable>
      </View>
    </View>
  );
};
