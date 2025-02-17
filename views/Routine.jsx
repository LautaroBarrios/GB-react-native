import { useEffect, useState, useRef } from "react";
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
import { Header } from "../components/Header";
import { ShowRoutine } from "../components/forms/ShowRoutine";

export function Routine() {
  const [routines, setRoutines] = useState([]);
  const [editingRoutine, setEditingRoutine] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const insets = useSafeAreaInsets();
  const flatListRef = useRef(null); // Referencia para FlatList

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

  // Agregar una rutina y hacer scroll al final
  const handleAddRoutine = () => {
    const updatedRoutines = addRoutine(routines);
    handleSaveRoutines(updatedRoutines);

    // Espera a que se actualice el estado y luego scrollea al final
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
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
    setEditingRoutine((prev) => {
      if (!prev) return prev;

      const updatedRoutine = { ...prev, [field]: value };

      // Actualizar la rutina dentro de la lista
      const updatedRoutines = routines.map((routine) =>
        routine.id === updatedRoutine.id ? updatedRoutine : routine
      );

      // Guardar automáticamente los cambios
      handleSaveRoutines(updatedRoutines);

      return updatedRoutine;
    });
  };

  const handleStartEditingField = (routine, field) => {
    setEditingRoutine({ ...routine });
    setEditingField(field);
  };

  const renderItem = ({ item }) => {
    return (
      <View key={item.id}>
        <ShowRoutine
          item={item}
          editingRoutine={editingRoutine}
          editingField={editingField}
          handleEditChange={handleEditChange}
          handleStartEditingField={handleStartEditingField}
          handleDeleteRoutine={handleDeleteRoutine}
        />
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

      <View style={{ flex: 1, padding: 20 }}>
        {/* Lista desplazable */}
        <FlatList
          ref={flatListRef} // Referencia de la lista
          data={routines}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
