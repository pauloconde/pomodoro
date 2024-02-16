import { TouchableOpacity, Text } from "react-native";
import GlobalStyles from "../globals/GlobalStyles";
import { useEffect, useState } from "react";
import {Audio} from "expo-av"

export default function StartButton({isActive, setIsActive}:any) {

    const [sound, setSound] = useState();

    function handleStartStop() {
        playSound();
        setIsActive(!isActive);
    }

    async function playSound(){
        const { sound } = await Audio.Sound.createAsync(
            require("../../assets/click.mp3"), undefined,null,true
        );
        await sound.playAsync();
    }

    return (
        <TouchableOpacity onPress={handleStartStop} style={GlobalStyles.startButton}>
            <Text style={GlobalStyles.textStartButton}>{isActive ? "PARAR" : "INICIAR"}</Text>
        </TouchableOpacity>
    )
}