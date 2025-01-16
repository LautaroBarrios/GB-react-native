import { Pressable, View, Text } from "react-native";
import { ArrowLeft } from "../icons/ArrowLeft";
import { useState } from "react";
import { ArrowRight } from "../icons/ArrowRight";

export const SideBar = () => {
  const [state, setState] = useState(false);
  const options = ["Inicio", "Ejercicios", "Rutina", "Modo"];
  return (
    <View
      className={`${!state ? "absolute h-0 w-0 bottom-0 left-0" : "absolute h-full w-36 bottom-0 left-0 bg-[#ffff00] border-l-[10px] border-[#ffff00]"} z-10`}
    >
      {/* Buttons  */}
      {options.map((option, index) => {
        return (
          <Pressable key={index} className="border-b border-slate-950 px-3 py-3">
            <Text className="font-bold text-slate-950">{option}</Text>
          </Pressable>
        );
      })}

      {/* Button Open and Close */}
      <Pressable
        onPress={() => setState(!state)}
        className={`absolute p-3 h-[60px] w-[60px] rounded-r-full bottom-10 bg-[#ffff00] ${
          state ? "left-[135px]" : "left-0"
        }`}
      >
        <View>{!state ? <ArrowRight /> : <ArrowLeft />}</View>
      </Pressable>
    </View>
  );
};
