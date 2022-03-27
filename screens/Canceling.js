import Icon from 'react-native-ico-material-design';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';

function Canceling({ navigation }) {
    const route = useRoute()

    const [lokasi, setLokasi] = useState('');
    const [tujuan, setTujuan] = useState('');
    const [layanan, setJenis] = useState('');
    const [hari_tgl, sethari_tanggal] = useState('');
    const [jam_wkt, setjam_waktu] = useState('');
    const [penumpang, setpenumpang] = useState('');

    const send = () => {
        navigation.navigate('Ordering', {
            lokasi: lokasi,
            tujuan: tujuan,
            layanan: layanan,
            hari_tgl: hari_tgl,
            jam_wkt: jam_wkt,
            penumpang: penumpang,
            
        })
    }

    const tampilkan = (start, end, kelas, tgl, mulai, usia, jmlh) => {
        if ((start == '') || (end == '') || (kelas == '') || (tgl == '') || (mulai == '') || (usia == '') || (jmlh == '')) {
            return <View style={{alignItems: 'center'}}>
                <Icon name="cancel-button"  height={50} width={50} color='#850303' />
                <Text> </Text>
            </View>
        }
        else {
            return <View style={{ flex: 1, marginBottom: 400 }}>
                <View style={{ height: '80%', borderColor: '#7ac3ff', borderWidth: 1, backgroundColor: '#ffffff', borderRadius: 10, marginTop: 5, marginBottom: 5, width: '100%', flex: 1, padding: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Pelabuhan Awal</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="waving-flag" height={18} width={18} color='#7ac3ff' />
                        <Text style={{ fontSize: 15, paddingBottom: 5 }}>{route.params.Lokasi_awal}</Text>
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Pelabuhan Tujuan</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="world-shape-public-symbol" height={18} width={18} color='#7ac3ff' />
                        <Text style={{ fontSize: 15, paddingBottom: 5 }}>{route.params.Lokasi_tujuan}</Text>
                    </View>
                    <View style={{ backgroundColor: '#7ac3ff', width: '100%', height: '1%', borderRadius: 20, marginTop: 5, marginBottom: 5, }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.Textorder}>Layanan</Text>
                        <Text style={styles.Textorder}>{route.params.jenisLayanan}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.Textorder}>Jadwal</Text>
                        <Text style={{ fontSize: 15 }}>{route.params.jadwalBerangkat}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.Textorder}>Waktu</Text>
                        <Text style={{ fontSize: 15 }}>{route.params.jadwalJam}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.Textorder}>Kategori</Text>
                        <Text style={{ fontSize: 15 }}>{route.params.kategoriTiket}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.Textorder}>Jumlah tersedia</Text>
                        <Text style={styles.Textorder}>{route.params.jumlahTiket}</Text>
                    </View>
                    <View style={{ backgroundColor: '#7ac3ff', width: '100%', height: '1%', borderRadius: 20, marginTop: 5, marginBottom: 5, }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.Textorder}>Harga/tiket</Text>
                        <Text style={styles.Textorder}>Gagal Dibayarkan</Text>
                    </View>
                </View>
            </View>
        }
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Text style={{ fontWeight:'bold', margin: 8, fontSize: 20, textAlign: 'center' }}>CANCELING ORDER TIKET PROCCES</Text>
                {tampilkan(route.params.Lokasi_awal, route.params.Lokasi_tujuan, route.params.jenisLayanan, route.params.jadwalBerangkat, route.params.jadwalJam, route.params.kategoriTiket, route.params.jumlahTiket)}
            </View>


            <View style={styles.NavContainer}>
                <View style={styles.NavBar}>
                    <Pressable onPress={() => navigation.navigate('Home')} style={styles.ScaleButton}
                        android_ripple={{ borderless: true, radius: 30 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="home-button" height={26} width={26} color='#FFFFFF' />
                        <Text style={styles.NavText}>Home</Text>
                    </Pressable>

                    <Pressable onPress={send} style={styles.ScaleButton}
                        android_ripple={{ borderless: true, radius: 30 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="google-drive-document" height={26} width={26} color='#FFFFFF' />
                        <Text style={styles.NavText}>Order</Text>
                    </Pressable>

                    <Pressable style={styles.ScaleButton}
                        android_ripple={{ borderless: true, radius: 30 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="cancel-button" height={26} width={26} color='#000000' />
                        <Text style={styles.NavText}>CancelOrder</Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Others')} style={styles.ScaleButton}
                        android_ripple={{ borderless: true, radius: 30 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="menu-button" height={26} width={26} color='#FFFFFF' />
                        <Text style={styles.NavText}>Menu</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    NavContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
    },

    NavBar: {
        flexDirection: 'row',
        backgroundColor: '#7ac3ff',
        width: '100%',
        justifyContent: 'space-evenly',
    },

    ScaleButton: {
        padding: 14,
    },

    NavText: {
        color: '#FFFFFF',
    },

    NavTextActive: {
        color: '#000000',
    },


    NavButtonContainer: {
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 3,
    },
    
    Textorder: {
        fontSize: 15, 
        fontWeight: 'bold'
    }
});

export default Canceling