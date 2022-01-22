import { Image, StyleSheet, View } from 'react-native';
import logo from '../../../assets/logo.png'
import CustomText from '../../components/CustomText';
import Topo from './components/Topo';

export default function Cesta() {
    return (
    <View>
        <Topo/>
        <View style={styles.cesta}>
            <CustomText style={styles.name}>Cesta de verduras</CustomText>
            <View  style={styles.farm}>
                <Image style={styles.farmLogo} source={logo}/>
                <CustomText style={styles.farmName}>Jenny Jack Farm</CustomText>
            </View>
            <CustomText style={styles.description}>
                Uma cesta com produtos selecionados
                cuidadosamente da fazenda direto para 
                sua cozinha
            </CustomText>
            <CustomText style={styles.price}>R$ 40,00</CustomText>
        </View>
    </View>
    )
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