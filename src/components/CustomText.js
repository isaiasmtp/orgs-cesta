import { StyleSheet, Text } from "react-native";

export default function CustomText(props){
    let style = styles.text
    if(props.style?.fontWeight === "bold") style = styles.textBold

    return <Text style={[style, props.style]} >{ props.children }</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Montserrat_400Regular",
        fontWeight: "normal"
    },
    textBold: {
        fontFamily: "Montserrat_700Bold",
        fontWeight: "normal"
    }
});