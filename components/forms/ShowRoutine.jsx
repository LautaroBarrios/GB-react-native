import { Text, View, TextInput, Pressable } from "react-native";
import { useRef, useEffect } from "react";
import { styles } from "../../styles/index";
import { Delete, Plus } from "../../icons";

export const ShowRoutine = ({
  item,
  handleAddSeries,
  editingRoutine,
  editingField,
  handleEditChange,
  handleStartEditingField,
  handleDeleteSeries,
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
      {/* Nombre del ejercicio */}
      <View style={[styles.cell, { width: "100%" }]} key="ejercicio">
        <Text style={styles.text}>EJERCICIO</Text>
        {isEditing && editingField === "ejercicio" ? (
          <TextInput
            ref={(ref) => (inputRefs.current["ejercicio"] = ref)}
            style={styles.textInput}
            value={editingRoutine["ejercicio"] || ""}
            onChangeText={(text) => handleEditChange("ejercicio", text)}
          />
        ) : (
          <Pressable
            style={{ width: "100%" }}
            onPress={() => handleStartEditingField(item, "ejercicio")}
          >
            <Text style={styles.text}>{item["ejercicio"] || "----"}</Text>
          </Pressable>
        )}
      </View>

      {/* Renderizar todas las series */}
      {item?.series?.map((serie, index) => (
        <View style={styles.rowFlex} key={index}>
          {["set", "reps", "peso", "rir"]?.map((field, col) => (
            <View
              style={[
                styles.cell,
                {
                  borderLeftWidth: 2,
                  borderRightWidth: col === 3 ? 2 : 0,
                  borderTopWidth: 2,
                  borderBottomWidth: 2,
                  borderColor: "#0f1729",
                },
              ]}
              key={field}
            >
              <Text style={styles.text}>{field.toUpperCase()}</Text>
              {isEditing && editingField === `${field}-${index}` ? (
                <TextInput
                  ref={(ref) => (inputRefs.current[`${field}-${index}`] = ref)}
                  style={styles.textInput}
                  value={serie[field] || ""}
                  onChangeText={(text) =>
                    handleEditChange(`${field}-${index}`, text)
                  }
                />
              ) : (
                <Pressable
                  style={styles.textInput}
                  onPress={() =>
                    handleStartEditingField(item, `${field}-${index}`)
                  }
                >
                  <Text style={styles.text}>{serie[field] || "----"}</Text>
                </Pressable>
              )}
            </View>
          ))}
        </View>
      ))}

      {/* Botones de agregar serie y eliminar rutina */}
      <View style={styles.rowFlex}>
        <Pressable
          key="AgregarSerie"
          style={[
            styles.buttonIcon,
            { backgroundColor: "#ffff00", padding: 4 },
          ]}
          onPress={() => handleAddSeries(item.id)}
          className="active:scale-95 transition-all"
        >
          <Plus stroke="#0f1729" />
        </Pressable>

        <Pressable
          key="EliminarSerie"
          style={[
            styles.buttonIcon,
            { backgroundColor: "#ffff00", padding: 4 },
          ]}
          onPress={() => handleDeleteSeries(item.id)}
          className="active:scale-95 transition-all"
        >
          <Delete />
        </Pressable>
      </View>
    </View>
  );
};
