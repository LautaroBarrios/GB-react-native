import { Pressable, Text } from "react-native";

export function ButtonAlert({data}) {
 return (
   <Pressable
     underlayColor={"#ccc"}
     onPress={() => alert("Button pressed")}
     style={{
       width: 200,
       height: 200,
       backgroundColor: "red",
       borderRadius: 20,
       alignItems: "center",
       justifyContent: "center",
     }}
   >
     <Text>Button</Text>
   </Pressable>
 );
}