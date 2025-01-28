import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { styles } from "../styles/index";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  loadRoutines,
  saveRoutines,
  addRoutine,
  deleteRoutine,
  editRoutine,
} from "../utils/routineFunctions";
import { EditRoutine } from "../components/forms/EditRoutine";
import { Header } from "../components/Header";

export function Routine() {
  const [routines, setRoutines] = useState([]);
  const [editingRoutine, setEditingRoutine] = useState(null);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const fetchRoutines = async () => {
      const loadedRoutines = await loadRoutines();
      setRoutines(loadedRoutines);
    };
    fetchRoutines();
  }, []);

  // Guardar rutinas
  const handleSaveRoutines = async (newRoutines) => {
    await saveRoutines(newRoutines);
    setRoutines(newRoutines);
  };

  // Agregar una rutina
  const handleAddRoutine = () => {
    const updatedRoutines = addRoutine(routines);
    handleSaveRoutines(updatedRoutines);
  };

  // Eliminar una rutina
  const handleDeleteRoutine = (id) => {
    const updatedRoutines = deleteRoutine(routines, id);
    handleSaveRoutines(updatedRoutines);
  };

  // Comenzar la edición
  const handleStartEditing = (routine) => {
    setEditingRoutine(routine);
  };

  // Cancelar la edición
  const handleCancelEditing = () => {
    setEditingRoutine(null);
  };

  // Guardar cambios de la rutina editada
  const handleSaveEditing = () => {
    const updatedRoutines = editRoutine(routines, editingRoutine);
    handleSaveRoutines(updatedRoutines);
    setEditingRoutine(null);
  };

  // Actualizar los cambios en la rutina
  const handleEditChange = (field, value) => {
    setEditingRoutine({ ...editingRoutine, [field]: value });
  };

  const renderItem = ({ item }) => {
    const isEditing = editingRoutine && editingRoutine.id === item.id;
    return (
      <View key={item.id}>
        {isEditing ? (
          <EditRoutine
            editingRoutine={editingRoutine}
            handleEditChange={handleEditChange}
            handleSaveEditing={handleSaveEditing}
            handleCancelEditing={handleCancelEditing}
          />
        ) : (
          <View style={styles.cardRoutine}>
            <Text style={styles.text}>Ejercicio:{item.ejercicio}</Text>
            <Text style={styles.text}>Series: {item.series}</Text>
            <Text style={styles.text}>Repeticiones: {item.repeticiones}</Text>
            <Pressable
              style={styles.button}
              className="active:scale-95"
              onPress={() => handleStartEditing(item)}
            >
              <Text style={styles.textButton}>Editar</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              className="active:scale-95"
              onPress={() => handleDeleteRoutine(item.id)}
            >
              <Text style={styles.textButton}>Eliminar</Text>
            </Pressable>
          </View>
        )}
      </View>
    );
  };

  return (
    <View
      className="flex-1 w-full p-2 m-4"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <ScrollView>
        <View style={styles.containerCenter}>
          <Header title={"Rutina"} functionPress={handleAddRoutine} />

          <FlatList
            data={routines}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            style={{ width: "90%", paddingVertical: 10 }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
