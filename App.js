import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/Main";
import "./global.css";
import { SideBar } from "./components/SideBar";

export default function App() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-slate-900 items-center justify-center relative">
        <StatusBar style="auto" />
        <SideBar />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
