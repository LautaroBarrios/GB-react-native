import { Pressable, View, Text, Image } from "react-native";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "../icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Icon from "../assets/favicon.png";

export const SideBar = ({ setView }) => {
  const [state, setState] = useState(false);
  const insets = useSafeAreaInsets();
  const options = ["Inicio", "Ejercicios", "Rutina", "Configuración"];

  return (
    <View
      className={`${!state ? "absolute h-full w-0 bottom-0 left-0" : "absolute h-full w-36 bottom-0 left-0 bg-[#ffff00] border-r-[4px] border-[#0f1729]"} z-10 transition-all`}
    >
      <View className="flex flex-row">
        <View className="w-[10px]" />
        <View className="flex-1">
          {/* Icon */}
          {state && (
            <View
              className={`items-center justify-center border-b border-slate-900 transition-all`}
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

          {/* Buttons  */}
          {state &&
            options.map((option, index) => {
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    setView(option);
                    setState(false);
                  }}
                  className="border-b border-slate-900 px-3 py-3 transition-all"
                >
                  <Text
                    className={`font-bold text-slate-900 whitespace-nowrap transition-opacity ${state ? "opacity-100" : "opacity-0"}`}
                  >
                    {option}
                  </Text>
                </Pressable>
              );
            })}
        </View>
      </View>

      {/* Button Open and Close */}
      <Pressable
        onPress={() => setState(!state)}
        className={`absolute p-3 h-[60px] w-[60px] rounded-r-full top-20 bg-[#ffff00] active:scale-95 transition-all ${
          state ? "left-[117px]" : "left-0"
        }`}
      >
        <View>{!state ? <ArrowRight /> : <ArrowLeft />}</View>
      </Pressable>
    </View>
  );
};
