import { Image, StyleSheet, View } from "react-native";
import CustomText from "../../../components/CustomText";

export default function Details({cesta, logo, farm, description, price}) {
    return <View style={styles.cesta}>
    <CustomText style={styles.name}>{cesta}</CustomText>
    <View  style={styles.farm}>
        <Image style={styles.farmLogo} source={logo}/>
        <CustomText style={styles.farmName}>{farm}</CustomText>
    </View>
    <CustomText style={styles.description}>
        {description}
    </CustomText>
    <CustomText style={styles.price}>{price}</CustomText>
</View>
}

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    name:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    farm: {
        flexDirection: "row",
        paddingVertical: 12
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    farmLogo: {
        width: 32,
        height: 32
    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});