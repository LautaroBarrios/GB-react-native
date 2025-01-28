import { View, Text, ScrollView, FlatList } from "react-native";
import { styles } from "../styles/index";

export function Routine() {
  const routines = Array.from({ length: 30 }, (_, index) => index);

  return (
    <View className="flex-1 w-full p-2 m-4">
      <ScrollView>
        <View style={styles.containerCenter}>
          <FlatList
            data={routines}
            keyExtractor={(item) => item}
            renderItem={(_, index) => (
              <View key={index} style={styles.cardRoutine}>
                <Text style={styles.text}>Rutina {index + 1}</Text>
                <Text style={styles.text}>Detalle 1</Text>
                <Text style={styles.text}>Detalle 2</Text>
                <Text style={styles.text}>Detalle 3</Text>
              </View>
            )}
            style={{ width: "90%" }}
          ></FlatList>
        </View>
      </ScrollView>
    </View>
  );
}
