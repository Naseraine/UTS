import Icon from 'react-native-ico-material-design';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';

function Others({ navigation }) {
    
    const [lokasi, setLokasi] = useState('');
    const [tujuan, setTujuan] = useState('');
    const [layanan, setJenis] = useState('');
    const [hari_tgl, sethari_tanggal] = useState('');
    const [jam_wkt, setjam_waktu] = useState('');
    const [kategori,setKategori] = useState('');
    const [penumpang, setpenumpang] = useState('');

    const send = () => {
        navigation.navigate('Ordering', {
            lokasi: lokasi,
            tujuan: tujuan,
            layanan: layanan,
            hari_tgl: hari_tgl,
            jam_wkt: jam_wkt,
            kategori: kategori,
            penumpang: penumpang,
        })
    }

    const [Lokasi_awal, setLokasi_awal] = useState('');
    const [Lokasi_tujuan, setLokasi_tujuan] = useState('');
    const [jenisLayanan, setjenisLayanan] = useState('')
    const [jadwalBerangkat, setjadwalBerangkat] = useState('');
    const [jadwalJam, setjadwalJam] = useState('');
    const [kategoriTiket, setkategoriTiket] = useState('');
    const [jumlahTiket, setjumlahTiket] = useState('')

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
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column', width: '90%', height: '90%', justifyContent: 'space-evenly' }}>
                <View style={{ flexDirection: 'row' }}>
                <Icon name="settings-cogwheel-button" height={26} width={26} color='#000000' />                
                <Text style={{marginLeft: 15, fontSize: 16}}>Settings</Text>
                </View>
                <View style={{ backgroundColor: '#000000', width: '100%', height: '0.3%' }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="earth-grid-select-language-button" height={26} width={26} color='#000000' />
                    <Text style={{marginLeft: 15, fontSize: 16}}>Ganti Bahasa : Indonesia</Text>
                </View>
                <View style={{ backgroundColor: '#000000', width: '100%', height: '0.3%'}}></View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="phone-call-button" height={26} width={26} color='#000000' />
                    <Text style={{marginLeft: 15, fontSize: 16}}>Call Center</Text>
                </View>
                <View style={{ backgroundColor: '#000000', width: '100%', height: '0.3%' }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="help-button-speech-bubble-with-questiom-mark" height={26} width={26} color='#000000' />
                    <Text style={{marginLeft: 15, fontSize: 16}}>Privacy Policy</Text>
                </View>
                <View style={{ backgroundColor: '#000000', width: '100%', height: '0.3%'}}></View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="google-apps-script-logo" height={26} width={26} color='#000000' />
                    <Text style={{marginLeft: 15, fontSize: 16}}>Keluar</Text>
                </View>
                <View style={{ backgroundColor: '#000000', width: '100%', height: '0.3%' }}></View>
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

                    <Pressable onPress={cancel} style={styles.ScaleButton}
                        android_ripple={{ borderless: true, radius: 30 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="cancel-button" height={26} width={26} color='#FFFFFF' />
                        <Text style={styles.NavText}>CancelOrder</Text>
                    </Pressable>

                    <Pressable style={styles.ScaleButton}
                        android_ripple={{ borderless: true, radius: 30 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="menu-button" height={26} width={26} color='#000000' />
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
    }
});

export default Others