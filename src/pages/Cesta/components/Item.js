import { Image, StyleSheet, View } from "react-native";
import CustomText from "../../../components/CustomText";

export default function Item({item}) {
    return (
    <View style={styles.itens}>
        <Image source={item.image} style={styles.itemLogo}/>
        <CustomText style={styles.itemName}>{item.name}</CustomText>
    </View>
    )
}

const styles = StyleSheet.create({
    itens: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "#ECECEC",
        borderBottomWidth: 1,
        paddingVertical: 16,
        marginHorizontal: 16

    },
    itemLogo: {
        width: 46,
        height: 46
    },
    itemName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        color: "#464646"
    },
})