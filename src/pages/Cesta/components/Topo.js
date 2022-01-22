import { Dimensions, Image, StyleSheet, View } from "react-native";
import CustomText from "../../../components/CustomText";
import topo from '../../../../assets/topo.png'
import cesta from "../../../mocks/cesta";

const width = Dimensions.get('screen').width;

export default function Topo({title}) {
    return <View>
        <Image style={styles.topo} source={topo} />
        <CustomText style={styles.title}>{title}</CustomText>
    </View>
}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 20,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 30,
    }
})