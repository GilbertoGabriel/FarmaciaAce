import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto( { children, style } ){
    let estilo = estilos.texto;

    if(style?.fontWeight === 'bold'){
        estilo = estilos.texoNegrito
    }
    return <Text style ={[style ,estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily:"CinzelRegular",
        fontWeight:"normal",
    },
    textoNegrito:{
        fontFamily:"CinzelBold",
        fontWeight:"normal",
    }
})