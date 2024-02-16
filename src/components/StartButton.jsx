import { TouchableOpacity, Text } from "react-native";
import GlobalStyles from "../globals/GlobalStyles";

export default function StartButton({isActive, setIsActive}) {

    function handleStartStop() {
        setIsActive(!isActive);
      }

    return (
        <TouchableOpacity onPress={handleStartStop} style={GlobalStyles.startButton}>
            <Text style={GlobalStyles.textStartButton}>{isActive ? "PARAR" : "INICIAR"}</Text>
        </TouchableOpacity>
    )
}