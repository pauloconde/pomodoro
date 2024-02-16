import { SafeAreaView, View } from "react-native";
import GlobalStyles from "./src/globals/GlobalStyles";
import { useState, useEffect } from "react";
import Header from "./src/components/Header";
import {Audio} from "expo-av"
import Tabs from "./src/globals/GlobalConstants";
import Timer from "./src/components/Timer";
import StartButton from "./src/components/StartButton";

const screenColors = ["#FF9955", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [time, setTime] = useState<number>(25 * 60);
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.POMO);
  const [isActive, setIsActive] = useState<Boolean>(false);



  const [sound, setSound] = useState();

  async function playSound(){
      const { sound } = await Audio.Sound.createAsync(
          require("./assets/click.mp3"), undefined,null,true
      );
      await sound.playAsync();
  }
  
  useEffect(() => {
    let interval: any = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 10);
    }

    if (time === 0) {
      playSound();
      setIsActive(false);
      setTime(currentTab === Tabs.POMO ? 1500 : currentTab === Tabs.LONG ? 900 : 300);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <SafeAreaView
      style={[
        GlobalStyles.androidSafeArea,
        { backgroundColor: screenColors[currentTab] },
      ]}
    >
      <View style={{ paddingHorizontal: 10, flex: 1, gap: 20 }}>
        <Header
          setTime={setTime}
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
          setIsActive={setIsActive}
        ></Header>
        <Timer time={time}></Timer>
        <StartButton
          isActive={isActive}
          setIsActive={setIsActive}
        ></StartButton>
      </View>
    </SafeAreaView>
  );
}
