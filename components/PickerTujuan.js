import React from "react";
import {StyleSheet, Text, View,TouchableOpacity, ScrollView} from 'react-native';

const Data = ['Bakahueni, Lampung', 'Merak, Banten', 'Tanjung Priok, Jakarta', 'Panjang, Lampung'];

const PickerTujuan = (props) => {
    const onPressTujuan = (pilihan) => {
        props.changeMV_Tujuan(false);
        props.setData(pilihan);
    }

    const pilihan = Data.map((item, index) => {
        return (
            <TouchableOpacity
            style={styles.pilihan}
            key={index}
            onPress={()=> onPressTujuan(item)}
            >
                <Text style={styles.textConfig}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    return(
        <TouchableOpacity
        onPress={()=> props.changeMV_Tujuan(false)}
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
        justifyContent: 'center',
        marginLeft: 50,
    },

    modal: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
})

export {PickerTujuan}