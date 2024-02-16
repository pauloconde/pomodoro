import { Text, View } from "react-native";
import GlobalStyles from "../globals/GlobalStyles";

export default function Timer({time}:any) {

    const formattedTime = `${Math.floor(time / 60).toString().padStart(2,"0")}:${(time % 60).toString().padStart(2,"0")}`;

    return (
        <View style= {GlobalStyles.timeContainer}>
            <Text style={GlobalStyles.textTimer} >{formattedTime}</Text>
        </View>
    )
}