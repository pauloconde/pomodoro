import { TouchableOpacity, Text } from "react-native";
import GlobalStyles from "../globals/GlobalStyles";
import {Audio} from "expo-av"

export default function StartButton({isActive, setIsActive}) {

    function handleStartStop() {
        //playSound();
        setIsActive(!isActive);
    }

    async function playSound(){
        const { sound } = await Audio.Sound.createAsync(
            require("../../assets/click.mp3"), null,null,true
        );
        await sound.playAsync();
    }

    return (
        <TouchableOpacity onPress={handleStartStop} style={GlobalStyles.startButton}>
            <Text style={GlobalStyles.textStartButton}>{isActive ? "PARAR" : "INICIAR"}</Text>
        </TouchableOpacity>
    )
}