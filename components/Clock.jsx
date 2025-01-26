import { useState, useRef } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Pause, Play, Stop } from "../icons";

export const Clock = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0, ms: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startClock = () => {
    if (isRunning) return;

    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        const { minutes, seconds, ms } = prevTime;
        if (ms < 99) {
          return { ...prevTime, ms: ms + 1 };
        } else if (seconds < 59) {
          return { minutes, seconds: seconds + 1, ms: 0 };
        } else {
          return { minutes: minutes + 1, seconds: 0, ms: 0 };
        }
      });
    }, 10);
  };

  const pauseClock = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const resetClock = () => {
    clearInterval(timerRef.current);
    setTime({ minutes: 0, seconds: 0, ms: 0 });
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {String(time.minutes).padStart(2, "0")}:
        {String(time.seconds).padStart(2, "0")}:
        {String(time.ms).padStart(2, "0")}
      </Text>
      <View style={styles.buttons}>
        {!isRunning ? (
          <Pressable
            onPress={startClock}
            className="py-1 h-[40px] w-20 bg-green-500 rounded flex items-center justify-center active:scale-95 transition-all"
            disabled={isRunning}
          >
            <Play />
          </Pressable>
        ) : (
          <Pressable
            onPress={pauseClock}
            disabled={!isRunning}
            className="py-1 h-[40px] w-20 bg-[#ffff00] rounded flex items-center justify-center active:scale-95 transition-all"
          >
            <Pause />
          </Pressable>
        )}
        <Pressable
          onPress={resetClock}
          className="py-1 h-[40px] w-20 bg-red-500 rounded flex items-center justify-center active:scale-95 transition-all"
        >
          <Stop />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    fontFamily: "monospace",
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
});
