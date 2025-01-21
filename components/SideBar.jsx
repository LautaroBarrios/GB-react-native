import { Pressable, View, Text, Image } from "react-native";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "../icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Icon from "../assets/favicon.png";

export const SideBar = () => {
  const [state, setState] = useState(false);
  const [delayedState, setDelayedState] = useState(false);
  const insets = useSafeAreaInsets();
  const options = ["Inicio", "Ejercicios", "Rutina", "Configuración"];

  // Efecto para manejar el retraso en la opacidad
  useEffect(() => {
    let timer;
    if (state) {
      timer = setTimeout(() => setDelayedState(true), 150);
    } else {
      setDelayedState(false);
    }
    return () => clearTimeout(timer);
  }, [state]);

  return (
    <View
      className={`${!state ? "absolute h-full w-0 bottom-0 left-0" : "absolute h-full w-36 bottom-0 left-0 bg-[#ffff00] border-l-[10px] border-[#ffff00]"} z-10 transition-all`}
    >
      {/* Icon */}
      {state && (
        <View
          className={`items-center justify-center border-b border-slate-950 transition-opacity ${
            delayedState ? "opacity-100" : "opacity-0"
          }`}
          style={{ paddingTop: insets.top }}
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

      {/* Buttons */}
      {state &&
        options.map((option, index) => {
          return (
            <Pressable
              key={index}
              className="border-b border-slate-950 px-3 py-3 active:scale-95 transition-all"
            >
              <Text
                className="font-bold text-slate-950 whitespace-nowrap transition-opacity"
                style={{
                  opacity: delayedState ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
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
          state ? "left-[117px]" : "left-0"
        }`}
      >
        <View>{!state ? <ArrowRight /> : <ArrowLeft />}</View>
      </Pressable>
    </View>
  );
};
