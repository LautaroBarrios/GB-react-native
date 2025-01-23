import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home, Exercices, Routine, Configuration } from "./views";
import "./global.css";
import { SideBar } from "./components/SideBar";
import { useState } from "react";

const App = () => {
  const [view, setView] = useState("Inicio");

  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-slate-900 items-center justify-center relative">
        <StatusBar style="auto" />
        <SideBar setView={setView} />
        {view === "Inicio" && <Home />}
        {view === "Ejercicios" && <Exercices />}
        {view === "Rutina" && <Routine />}
        {view === "Configuración" && <Configuration />}
      </View>
    </SafeAreaProvider>
  );
};

export default App;
