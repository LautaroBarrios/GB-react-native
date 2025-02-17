import { useEffect, useState, useRef } from "react";
import { View, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  loadRoutines,
  saveRoutines,
  addRoutine,
  addSeries,
} from "../utils/routineFunctions";
import { Header } from "../components/Header";
import { ShowRoutine } from "../components/forms/ShowRoutine";

export function Routine() {
  const [routines, setRoutines] = useState([]);
  const [editingRoutine, setEditingRoutine] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const insets = useSafeAreaInsets();
  const flatListRef = useRef(null); // Referencia para FlatList

  console.log(routines);

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

  // Eliminar una serie
  const handleDeleteSeries = (routineId) => {
    setRoutines((prevRoutines) => {
      return prevRoutines
        .map((routine) => {
          if (routine.id === routineId) {
            // Si tiene solo una serie, eliminamos el ejercicio completo
            if (routine.series.length === 1) {
              return null; // Esto marcará la rutina para eliminarla
            } else {
              // Si tiene más de una serie, eliminamos la última
              const updatedSeries = routine.series.slice(0, -1); // Elimina la última serie
              return { ...routine, series: updatedSeries };
            }
          }
          return routine;
        })
        .filter(Boolean); // Filtramos las rutinas que son null (eliminadas)
    });
  };

  // Actualizar los cambios en la rutina
  const handleEditChange = (field, value) => {
    setEditingRoutine((prev) => {
      if (!prev) return prev;

      // Si el campo pertenece a una serie, actualizamos la serie correspondiente
      if (field.includes("-")) {
        const [fieldName, index] = field.split("-");
        const updatedRoutine = { ...prev };

        // Actualizamos el campo de la serie correspondiente
        updatedRoutine.series[index] = {
          ...updatedRoutine.series[index],
          [fieldName]: value,
        };

        // Actualizamos la rutina en la lista
        const updatedRoutines = routines.map((routine) =>
          routine.id === updatedRoutine.id ? updatedRoutine : routine
        );

        // Guardamos los cambios
        handleSaveRoutines(updatedRoutines);

        return updatedRoutine;
      }

      // Si el campo no pertenece a una serie, actualizamos directamente el campo de la rutina
      const updatedRoutine = { ...prev, [field]: value };
      const updatedRoutines = routines.map((routine) =>
        routine.id === updatedRoutine.id ? updatedRoutine : routine
      );

      handleSaveRoutines(updatedRoutines);

      return updatedRoutine;
    });
  };

  const handleStartEditingField = (routine, field) => {
    setEditingRoutine({ ...routine });
    setEditingField(field);
  };

  const handleAddSeries = (routineId) => {
    setRoutines((prevRoutines) => addSeries(prevRoutines, routineId));
  };

  const renderItem = ({ item }) => {
    return (
      <View key={item.id}>
        <ShowRoutine
          item={item}
          handleAddSeries={handleAddSeries}
          editingRoutine={editingRoutine}
          editingField={editingField}
          handleEditChange={handleEditChange}
          handleStartEditingField={handleStartEditingField}
          handleDeleteSeries={handleDeleteSeries}
        />
      </View>
    );
  };

  return (
    <View
      className="flex-1 w-full p-2 m-3"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      {/* Header fijo */}
      <Header title={"Rutina"} functionPress={handleAddRoutine} />

      <View style={{ flex: 1, padding: 16 }}>
        {/* Lista desplazable */}
        <FlatList
          ref={flatListRef}
          data={routines}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
