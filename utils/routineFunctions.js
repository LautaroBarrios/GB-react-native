import AsyncStorage from "@react-native-async-storage/async-storage";

// Cargar las rutinas almacenadas
export const loadRoutines = async () => {
  try {
    const storedRoutines = await AsyncStorage.getItem("routines");
    return storedRoutines ? JSON.parse(storedRoutines) : [];
  } catch (error) {
    console.error("Error al cargar las rutinas", error);
    return [];
  }
};

// Guardar las rutinas
export const saveRoutines = async (routines) => {
  try {
    await AsyncStorage.setItem("routines", JSON.stringify(routines));
  } catch (error) {
    console.error("Error al guardar las rutinas", error);
  }
};

// Agregar una rutina
export const addRoutine = (routines) => {
  const newRoutine = {
    id: Date.now(),
    ejercicio: "",
    serie: "",
    repeticiones: "",
    peso: "",
    rir: "",
    día: "",
    notas: "",
    fecha: new Date().toLocaleDateString(),
  };
  return [...routines, newRoutine];
};

// Eliminar una rutina
export const deleteRoutine = (routines, id) => {
  return routines.filter((routine) => routine.id !== id);
};

// Editar una rutina
export const editRoutine = (routines, editingRoutine) => {
  return routines.map((routine) =>
    routine.id === editingRoutine.id ? editingRoutine : routine
  );
};
