import { Pressable, Text } from "react-native";

export function ButtonAlert({ data }) {
  return (
    <Pressable
      underlayColor={"#ccc"}
      onPress={() => alert("Button pressed")}
      style={{
        width: 80,
        height: 24,
        backgroundColor: "#ffff00",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text className="text-slate-950 font-bold">Button</Text>
    </Pressable>
  );
}
