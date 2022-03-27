import React from "react";
import {StyleSheet, Text, View,TouchableOpacity, ScrollView} from 'react-native';

const Data = ['Ekonomi', 'Executive'];

const PickerLayanan = (props) => {
    const onPressLayanan = (pilihan) => {
        props.changeMV_Layanan(false);
        props.setData(pilihan);
    }

    const pilihan = Data.map((item, index) => {
        return (
            <TouchableOpacity
            style={styles.pilihan}
            key={index}
            onPress={()=> onPressLayanan(item)}
            >
                <Text style={styles.textConfig}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    return(
        <TouchableOpacity
        onPress={()=> props.changeMV_Layanan(false)}
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
        margin: 10,
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
        marginLeft : 48,
        marginTop: 15,
    },

    modal: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
})

export {PickerLayanan}