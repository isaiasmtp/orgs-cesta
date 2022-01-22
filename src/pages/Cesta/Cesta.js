import { FlatList, StyleSheet, View } from 'react-native';
import Details from './components/Details';
import Topo from './components/Topo';
import Item from './components/Item';
import CustomText from '../../components/CustomText';

export default function Cesta({topo, details, itens}) {
    return (
    <>
        <FlatList 
            data={itens.list}
            renderItem={Item}
            keyExtractor={(item)=> item.name}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo}/>
                    <View style={styles.cesta}> 
                        <Details {...details}/>
                        <CustomText style={styles.title}>{itens.title}</CustomText>
                    </View>
                </>
            }}
        />     
    </>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})