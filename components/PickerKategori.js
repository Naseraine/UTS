import React from "react";
import {StyleSheet, Text, View,TouchableOpacity, ScrollView} from 'react-native';

const Data = ['Dewasa', 'Anak'];

const PickerKategori = (props) => {
    const onPressKategori = (pilihan) => {
        props.changeMV_Kategori(false);
        props.setData(pilihan);
    }

    const pilihan = Data.map((item, index) => {
        return (
            <TouchableOpacity
            style={styles.pilihan}
            key={index}
            onPress={()=> onPressKategori(item)}
            >
                <Text style={styles.textConfig}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    return(
        <TouchableOpacity
        onPress={()=> props.changeMV_Kategori(false)}
        style={styles.container}
        >
            <View style={[styles.modal, {width: '85%', height: '13%'}]}>
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
        justifyContent: 'flex-end',
        marginBottom: 160,
        marginLeft: 40,
    },

    modal: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
})

export {PickerKategori}