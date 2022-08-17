import React from "react";
import { Image, StyleSheet , View } from "react-native";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";



export default function Cesta({topo, detalhes}) {
    return <>
        <Topo {...topo} />
        <Detalhes {...detalhes}/>
        <View style={style.cesta}>
        </View>
    </>
}

const style = StyleSheet.create({
    
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    
})