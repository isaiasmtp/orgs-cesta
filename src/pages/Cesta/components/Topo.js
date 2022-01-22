import { Dimensions, Image, StyleSheet, View } from "react-native";
import CustomText from "../../../components/CustomText";
import topo from '../../../../assets/topo.png'

const width = Dimensions.get('screen').width;
const height = 578 / 768 * width /2;

export default function Topo({title}) {
    return <View>
        <Image style={styles.topo} source={topo} />
        <CustomText style={styles.title}>{title}</CustomText>
    </View>
}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: height,
    },
    title: {
        width: "100%",
        justifyContent:"center",
        position: "absolute",
        textAlign: "center",
        fontSize: 20,
        lineHeight: height,
        color: "white",
        fontWeight: "bold",
    }
})