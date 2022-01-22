import { View } from 'react-native';
import Details from './components/Details';
import Topo from './components/Topo';

export default function Cesta({topo, details}) {
    return (
    <View>
        <Topo {...topo}/>
        <Details {...details}/>
    </View>
    )
}