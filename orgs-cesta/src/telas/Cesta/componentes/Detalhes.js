import React from "react";
import { View, Image , StyleSheet} from "react-native";

import Texto from "../../../componentes/Texto";


export default function Detalhes({nome, logoFarmacia, nomeFarmacia, descricao, preco}) {
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.farmacia}>
            <Image source={logoFarmacia} style={estilos.logoIcone} />
            <Texto style={estilos.nomeFarmacia}>{nomeFarmacia}</Texto>
        </View>

        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    farmacia:{
        flexDirection: "row",
        paddingVertical: 12
    }
    ,
    logoIcone:{
        width: 42,
        height: 42,
    },  
    nomeFarmacia: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})