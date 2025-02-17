import { Text, View, TextInput, Pressable } from "react-native";
import { useRef, useEffect } from "react";
import { styles } from "../../styles/index";

export const ShowRoutine = ({
  item,
  editingRoutine,
  editingField,
  handleEditChange,
  handleStartEditingField,
  handleDeleteRoutine,
}) => {
  const isEditing = editingRoutine && editingRoutine.id === item.id;
  const inputRefs = useRef({});

  useEffect(() => {
    if (editingField && inputRefs.current[editingField]) {
      inputRefs.current[editingField].focus();
    }
  }, [editingField]);

  return (
    <View style={styles.cardRoutine}>
      <View style={[styles.cell, { width: "95.2%" }]} key="fecha">
        <Text style={styles.text}>{item["fecha"]}</Text>
      </View>
      {["ejercicio", "serie", "repeticiones", "peso", "rir", "día"].map(
        (field) => (
          <View style={styles.cell} key={field}>
            <Text style={styles.text}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </Text>
            {isEditing && editingField === field ? (
              <TextInput
                ref={(ref) => (inputRefs.current[field] = ref)}
                style={styles.textInput}
                value={editingRoutine[field] || ""}
                onChangeText={(text) => handleEditChange(field, text)}
              />
            ) : item[field] ? (
              <Pressable
                style={{ width: "100%" }}
                onPress={() => handleStartEditingField(item, field)}
              >
                <Text style={styles.text}>{item[field]}</Text>
              </Pressable>
            ) : (
              <Pressable
                style={{ width: "100%" }}
                onPress={() => handleStartEditingField(item, field)}
              >
                <Text style={[styles.text, { color: "#999" }]}>----</Text>
              </Pressable>
            )}
          </View>
        )
      )}
      <View style={[styles.cell, { width: "95.2%" }]} key="notas">
        <Text style={styles.text}>Notas</Text>
        {isEditing && editingField === "notas" ? (
          <TextInput
            ref={(ref) => (inputRefs.current["notas"] = ref)}
            style={styles.textInput}
            value={editingRoutine["notas"] || ""}
            onChangeText={(text) => handleEditChange("notas", text)}
            multiline={true} // Permite múltiples líneas
            numberOfLines={4}
          />
        ) : item["notas"] ? (
          <Pressable
            style={{ width: "100%" }}
            onPress={() => handleStartEditingField(item, "notas")}
          >
            <Text style={styles.text}>{item["notas"]}</Text>
          </Pressable>
        ) : (
          <Pressable onPress={() => handleStartEditingField(item, "notas")}>
            <Text style={[styles.text, { color: "#999" }]}>----</Text>
          </Pressable>
        )}
      </View>
      {!isEditing && (
        <View
          style={[
            {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: 2,
            },
          ]}
          key="eliminar"
        >
          <Pressable
            style={styles.button}
            onPress={() => handleDeleteRoutine(item.id)}
          >
            <Text style={styles.textButton}>Eliminar</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};
