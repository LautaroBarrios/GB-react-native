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
    series: [{ set: 1, reps: "", peso: "", rir: 1 }],
  };
  return [...routines, newRoutine];
};

// Agregar una serie a una rutina
export const addSeries = (routines, routineId) => {
  return routines.map((routine) => {
    console.log(routine);
    
    if (routine.id === routineId) {
      const newSetNumber =
        routine?.series?.length == 0 ? 1 : routine.series.length + 1; 
      return {
        ...routine,
        series: [
          ...routine.series,
          { set: newSetNumber, reps: "", peso: "", rir: "" },
        ],
      };
    }
    return routine;
  });
};

// Eliminar una rutina
export const deleteRoutine = (routines, id) => {
  return routines.filter((routine) => routine.id !== id);
};
