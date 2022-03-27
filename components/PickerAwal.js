import React from "react";
import {StyleSheet, Text, View,TouchableOpacity, ScrollView} from 'react-native';

const Data = ['Bakahueni, Lampung', 'Merak, Banten', 'Tanjung Priok, Jakarta', 'Panjang, Lampung'];

const PickerAwal = (props) => {
    const onPressAwal = (pilihan) => {
        props.changeMV_Awal(false);
        props.setData(pilihan);
    }

    const pilihan = Data.map((item, index) => {
        return (
            <TouchableOpacity
            style={styles.pilihan}
            key={index}
            onPress={()=> onPressAwal(item)}
            >
                <Text style={styles.textConfig}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    return(
        <TouchableOpacity
        onPress={()=> props.changeMV_Awal(false)}
        style={styles.container}
        >
            <View style={[styles.modal, {width: '85%'}]}>
                <ScrollView>
                    {pilihan}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textConfig: {
        margin: 15,
        marginLeft: 15,
        fontSize: 15,
    },

    pilihan: {
        alignItems: 'flex-start',
    },

    container: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 48,
        marginTop: 235,
    },

    modal: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
})

export {PickerAwal}