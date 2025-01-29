import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
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
import { ShowRoutine } from "../components/forms/ShowRoutine";

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
          <ShowRoutine
            item={item}
            handleDeleteRoutine={handleDeleteRoutine}
            handleStartEditing={handleStartEditing}
          />
        )}
      </View>
    );
  };

  return (
    <View
      className="flex-1 w-full p-2 m-4"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      {/* Header fijo */}
      <Header title={"Rutina"} functionPress={handleAddRoutine} />

      <View style={{ padding: 10 }}>
        {/* Encabezado de la tabla */}
        <View style={styles.cardRoutine}>
          {["EJERCICIO", "SERIES", "REPES", "OPCIONES"].map((title, index) => (
            <View
              key={index}
              style={[
                styles.tableHead,
                { borderRightWidth: index !== 3 ? 2 : 0 },
              ]}
            >
              <Text style={styles.text}>{title}</Text>
            </View>
          ))}
        </View>

        {/* Lista desplazable */}
        <FlatList
          data={routines}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
