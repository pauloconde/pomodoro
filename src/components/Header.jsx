import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import GlobalStyles from "../globals/GlobalStyles";
import Tabs from "../globals/GlobalConstants";

const headerButtons = ["Pomodoro", "Pausa Corta", "Pausa Larga"];

export default function Header({currentTab, setCurrentTab, setTime}) {
  
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTab(index); 
    setTime(newTime * 60);
  }

  return (
    <View>
      <Text style={GlobalStyles.textHeader}>Pomodoro</Text>

      <View style={{ flexDirection: "row" }}>
        {headerButtons.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(index)}
            style={[GlobalStyles.headerButton, currentTab !== index && {borderColor: "transparent"}]}
          >
            <Text style={GlobalStyles.textHeaderButton}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
