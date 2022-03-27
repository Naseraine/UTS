import Icon from 'react-native-ico-material-design';
import { StyleSheet, Text, View, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Ticket from '../src/data/Data.json'
import { useRoute } from '@react-navigation/native';

function Ordering({ navigation }) {
    const route = useRoute();

    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    const [Lokasi_awal, setLokasi_awal] = useState(route.params.lokasi);
    const [Lokasi_tujuan, setLokasi_tujuan] = useState(route.params.tujuan);
    const [jenisLayanan, setjenisLayanan] = useState(route.params.layanan)
    const [jadwalBerangkat, setjadwalBerangkat] = useState(route.params.hari_tgl);
    const [jadwalJam, setjadwalJam] = useState(route.params.jam_wkt);
    const [kategoriTiket, setkategoriTiket] = useState(route.params.kategori);
    const [jumlahTiket, setjumlahTiket] = useState(route.params.penumpang)

    const cancel = () => {
        navigation.navigate('Canceling', {
            Lokasi_awal: Lokasi_awal,
            Lokasi_tujuan: Lokasi_tujuan,
            jenisLayanan: jenisLayanan,
            jadwalBerangkat: jadwalBerangkat,
            jadwalJam: jadwalJam,
            kategoriTiket: kategoriTiket,
            jumlahTiket: jumlahTiket,
        })
    }

    const batalKosong = () => {
        navigation.navigate('Canceling', {
            Lokasi_awal: '',
            Lokasi_tujuan: '',
            jenisLayanan: '',
            jadwalBerangkat: '',
            jadwalJam: '',
            kategoriTiket: '',
            jumlahTiket: '',
        })
    }


    const show = (parameter_lokasi, parameter_tujuan, parameter_layanan, parameter_tanggal, parameter_waktu, parameter_kategori, parameter_penumpang) => {
        if ((parameter_lokasi == '') || (parameter_tujuan == '') || (parameter_layanan == '') || (parameter_tanggal == '') || (parameter_waktu == '') || (parameter_kategori == '') || (parameter_penumpang == '')) {
            return <View  style={{alignItems:'center'}}>
                <Icon name="cancel-button"  height={50} width={50} color='#850303' />
                <Text> </Text>
            </View>
        }
        else {
            return <View>
                <View style={{ borderColor: '#7ac3ff', borderWidth: 1, backgroundColor: '#ffffff', borderRadius: 10, marginTop: 5, marginBottom: 5, flex: 1, padding: 10, marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Pelabuhan Awal</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="waving-flag" height={18} width={18} color='#7ac3ff' />
                        <Text style={{ fontSize: 15, paddingBottom: 5 }}>{route.params.lokasi}</Text>
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Pelabuhan Tujuan</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="world-shape-public-symbol" height={18} width={18} color='#7ac3ff' />
                        <Text style={{ fontSize: 15, paddingBottom: 5 }}>{route.params.tujuan}</Text>
                    </View>
                    <View style={{ backgroundColor: '#7ac3ff', width: '100%', height: '1%', borderRadius: 20, marginTop: 5, marginBottom: 5, }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.Textorder}>Layanan</Text>
                        <Text style={styles.Textorder}>{route.params.layanan}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.Textorder}>Jadwal</Text>
                        <Text style={{ fontSize: 15 }}>{route.params.hari_tgl}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.Textorder}>Waktu</Text>
                        <Text style={{ fontSize: 15 }}>{route.params.jam_wkt}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.Textorder}>Kategori</Text>
                        <Text style={{ fontSize: 15 }}>{route.params.kategori}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.Textorder}>Jumlah tersedia</Text>
                        <Text style={styles.Textorder}>{route.params.penumpang}</Text>
                    </View>
                    <View style={{ backgroundColor: '#7ac3ff', width: '100%', height: '1%', borderRadius: 20, marginTop: 5, marginBottom: 5, }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.Textorder}>Harga/tiket</Text>
                        <Text style={styles.Textorder}>RP 25000</Text>
                    </View>
                </View>
                <View style={{ marginBottom: 5, alignItems: 'center' }}>
                    <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', width: '28%', backgroundColor: '#850303', borderRadius: 8, borderWidth: 1, borderColor: '#850303' }}
                        onPress={cancel}>
                        <Text style={{ padding: 5, color: 'white', fontWeight: 'bold' }}>Cancel Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        }
    };

    return (
        <View style={styles.container}>

            <ScrollView
                onScroll={({ nativeEvent }) => {
                    if (isCloseToBottom(nativeEvent)) {
                    }
                }}
                scrollEventThrottle={400}
                style={{ flex: 1, width: '90%', marginBottom: 65 }}
            >
                <View>
                    <Text style={{ fontWeight: 'bold', margin: 8, fontSize: 20, textAlign: 'center' }}>ORDERING TIKET PROCCES</Text>
                    <View>
                        {show(route.params.lokasi, route.params.tujuan, route.params.layanan, route.params.hari_tgl, route.params.jam_wkt, route.params.kategori, route.params.penumpang)}
                    </View>
                    <View style={{ backgroundColor: '#7ac3ff', width: '100%', height: '0.2%', borderRadius: 20 }}></View>

                    <Text style={{ fontWeight: 'bold', margin: 8, fontSize: 20, textAlign: 'center' }}>LIST OF TICKET AVAILBILITY</Text>
                    <View>
                        {
                            Ticket && Ticket.map(tiketTersedia => {
                                return (
                                    <View style={{ borderColor: '#7ac3ff', borderWidth: 1, backgroundColor: '#ffffff', borderRadius: 10, marginTop: 5, marginBottom: 5, width: '100%', flex: 1, padding: 10 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Pelabuhan Awal</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon name="waving-flag" height={18} width={18} color='#7ac3ff' />
                                            <Text style={{ fontSize: 15, paddingBottom: 5 }}>{tiketTersedia.awal}</Text>
                                        </View>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Pelabuhan Tujuan</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon name="world-shape-public-symbol" height={18} width={18} color='#7ac3ff' />
                                            <Text style={{ fontSize: 15, paddingBottom: 5 }}>{tiketTersedia.akhir}</Text>
                                        </View>
                                        <View style={{ backgroundColor: '#7ac3ff', width: '100%', height: '1%', borderRadius: 20, marginTop: 5, marginBottom: 5, }}></View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={styles.Textorder}>Layanan</Text>
                                            <Text style={styles.Textorder}>{tiketTersedia.layanan}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={styles.Textorder}>Jadwal</Text>
                                            <Text style={{ fontSize: 15 }}>{tiketTersedia.tanggal}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={styles.Textorder}>Waktu</Text>
                                            <Text style={{ fontSize: 15 }}>{tiketTersedia.waktu}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={styles.Textorder}>Kategori</Text>
                                            <Text style={{ fontSize: 15 }}>{tiketTersedia.kategori}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={styles.Textorder}>Jumlah tersedia</Text>
                                            <Text style={styles.Textorder}>{tiketTersedia.jumlah}</Text>
                                        </View>
                                        <View style={{ backgroundColor: '#7ac3ff', width: '100%', height: '1%', borderRadius: 20, marginTop: 5, marginBottom: 5, }}></View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={styles.Textorder}>Harga/tiket</Text>
                                            <Text style={styles.Textorder}>Rp {tiketTersedia.harga}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>


            <View style={styles.NavContainer}>
                <View style={styles.NavBar}>
                    <Pressable onPress={() => navigation.navigate('Home')} style={styles.ScaleButton}
                        android_ripple={{ borderless: true, radius: 30 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="home-button" height={26} width={26} color='#FFFFFF' />
                        <Text style={styles.NavText}>Home</Text>
                    </Pressable>

                    <Pressable style={styles.ScaleButton}
                        android_ripple={{ borderless: true, radius: 30 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="google-drive-document" height={26} width={26} color='#000000' />
                        <Text style={styles.NavText}>Order</Text>
                    </Pressable>

                    <Pressable onPress={batalKosong} style={styles.ScaleButton}
                        android_ripple={{ borderless: true, radius: 30 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="cancel-button" height={26} width={26} color='#FFFFFF' />
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

    kotak: {
        width: '80%',
        height: '13%',
        backgroundColor: 'white',
        elevation: 50,
        padding: 10,
    },

    kontenAtas: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },

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
    },
});

export default Ordering