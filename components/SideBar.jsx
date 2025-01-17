import { Pressable, View, Text, Image } from "react-native";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "../icons";
import Icon from "../assets/favicon.png";

export const SideBar = () => {
  const [state, setState] = useState(false);
  const options = ["Inicio", "Ejercicios", "Rutina", "Configuración"];
  return (
    <View
      className={`${!state ? "absolute h-full w-0 bottom-0 left-0" : "absolute h-full w-36 bottom-0 left-0 bg-[#ffff00] border-l-[10px] border-[#ffff00]"} z-10 transition-all`}
    >
      {/* Icon */}
      {state && (
        <View
          className={`items-center justify-center border-b border-slate-950 transition-opacity ${state ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            source={Icon}
            style={{
              width: 100,
              height: 100,
              marginVertical: 20,
              marginRight: 10,
            }}
          />
        </View>
      )}

      {/* Buttons  */}
      {state &&
        options.map((option, index) => {
          return (
            <Pressable
              key={index}
              className="border-b border-slate-950 px-3 py-3 active:scale-95 transition-all"
            >
              <Text
                className={`font-bold text-slate-950 whitespace-nowrap transition-opacity ${state ? "opacity-100" : "opacity-0"}`}
              >
                {option}
              </Text>
            </Pressable>
          );
        })}

      {/* Button Open and Close */}
      <Pressable
        onPress={() => setState(!state)}
        className={`absolute p-3 h-[60px] w-[60px] rounded-r-full bottom-10 bg-[#ffff00] active:scale-95 transition-all ${
          state ? "left-[135px]" : "left-0"
        }`}
      >
        <View>{!state ? <ArrowRight /> : <ArrowLeft />}</View>
      </Pressable>
    </View>
  );
};
