import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 30 : 0,
    },
    textHeader: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#333333",
        padding: 10,
        textAlign: "left"
    },
    textHeaderButton: {
        fontSize: 16,
        color: "#333333",
        fontWeight: "bold"
    },
    textTimer: {
        fontSize: 80,
        color: "#333333",
        fontWeight: "bold",
        textAlign: "center"
    },
    headerButton: {
        borderWidth: 2,
        padding: 10,
        borderColor: "white",
        borderRadius: 10,
        width: "33%",
        alignItems: "center",
        
    },
    timeContainer: {
        backgroundColor: "#F2F2F2",
        padding: 15,
        borderRadius: 10,
        flex: .4,
        justifyContent: "center"
    },
    startButton: {
        backgroundColor: "#333333",
        justifyContent: "center",
        borderRadius: 10,
        padding: 10
    },
    textStartButton: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
});
