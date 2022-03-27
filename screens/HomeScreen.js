import Icon from 'react-native-ico-material-design';
import { StyleSheet, Text, View, Pressable, Modal, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { PickerAwal } from '../components/PickerAwal';
import { PickerTujuan } from '../components/PickerTujuan';
import { PickerLayanan } from '../components/PickerLayanan';
import { PickerKategori } from '../components/PickerKategori';

function HomeScreen({ navigation }) {

    const [chooseData, setchooseData] = useState('Select Harbour Start');
    const [isModalVisibleAwal, setisModalVisibleAwal] = useState(false);

    const changeMV_Awal = (bool) => {
        setisModalVisibleAwal(bool)
    }

    const setData = (pilihan) => {
        setchooseData(pilihan)
        setLokasi(pilihan)
    }

    const [choosePelabuhanTujuan, setchoosePelabuhanTujuan] = useState('Select Harbour Begin');
    const [isModalVisibleTujuan, setisModalVisibleTujuan] = useState(false);

    const changeMV_Tujuan = (bool) => {
        setisModalVisibleTujuan(bool)
    }

    const setPelabuhanTujuan = (pilihan) => {
        setchoosePelabuhanTujuan(pilihan)
        setTujuan(pilihan)
    }

    const [chooseLayanan, setchooseLayanan] = useState('Select Category Service');
    const [isModalVisibleLayanan, setisModalVisibleLayanan] = useState(false);

    const changeMV_Layanan = (bool) => {
        setisModalVisibleLayanan(bool)
    }

    const setLayanan = (pilihan) => {
        setchooseLayanan(pilihan)
        setJenis(pilihan)
    }

    const [chooseK_Penumpang, setchooseK_Penumpang] = useState('Pilih kategori');
    const [isModalVisibleKategori, setisModalVisibleKategori] = useState(false);

    const changeMV_Kategori = (bool) => {
        setisModalVisibleKategori(bool)
    }

    const setK_Penumpang = (pilihan) => {
        setchooseK_Penumpang(pilihan)
        setKategori(pilihan)
    }


    const [lokasi,setLokasi] = useState('');
    const [tujuan,setTujuan] = useState('');
    const [layanan,setJenis] = useState('');
    const [hari_tgl,sethari_tanggal] = useState('');
    const [jam_wkt,setjam_waktu] = useState('');
    const [kategori,setKategori] = useState('');
    const [penumpang,setpenumpang] = useState('');

    const send = () => {
        navigation.navigate('Ordering', {
            lokasi: lokasi,
            tujuan : tujuan,
            layanan : layanan,
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
            <View style={styles.FormBox}>
                <Text style={styles.judulText}>Kapalzy</Text>



                <Text style={styles.textConfig}>Pelabuhan Awal</Text>
                <View style={styles.pelabuhan}>
                    <Icon name="waving-flag" height={37} width={37} color='#7ac3ff' />

                    <TouchableOpacity
                        style={styles.touchInputForm}
                        onPress={() => changeMV_Awal(true)}
                    >
                        <Text style={styles.textTouch} onChangeText={(text)=>setLokasi(text)}>{chooseData}</Text>
                    </TouchableOpacity>
                    <Modal
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisibleAwal}
                        nRequestClose={() => changeMV_Awal(false)}
                    >
                        <PickerAwal
                            changeMV_Awal={changeMV_Awal}
                            setData={setData}
                        />
                    </Modal>
                </View>


                <Text style={styles.textConfig}>Pelabuhan Tujuan</Text>
                <View style={styles.pelabuhan}>
                    <Icon name="world-shape-public-symbol" height={37} width={37} color='#7ac3ff' />

                    <TouchableOpacity
                        style={styles.touchInputForm}
                        onPress={() => changeMV_Tujuan(true)}
                    >
                        <Text style={styles.textTouch}>{choosePelabuhanTujuan}</Text>
                    </TouchableOpacity>
                    <Modal
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisibleTujuan}
                        nRequestClose={() => changeMV_Tujuan(false)}
                    >
                        <PickerTujuan
                            changeMV_Tujuan={changeMV_Tujuan}
                            setData={setPelabuhanTujuan}
                        />
                    </Modal>
                </View>


                <Text style={styles.textConfig}>Layanan</Text>
                <View style={styles.pelabuhan}>
                    <Icon name="work-briefcase" height={37} width={37} color='#7ac3ff' />

                    <TouchableOpacity
                        style={styles.touchInputForm}
                        onPress={() => changeMV_Layanan(true)}
                    >
                        <Text style={styles.textTouch}>{chooseLayanan}</Text>
                    </TouchableOpacity>
                    <Modal
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisibleLayanan}
                        nRequestClose={() => changeMV_Layanan(false)}
                    >
                        <PickerLayanan
                            changeMV_Layanan={changeMV_Layanan}
                            setData={setLayanan}
                        />
                    </Modal>
                </View>


                <Text style={styles.textConfig}>Tanggal</Text>
                <View style={styles.pelabuhan}>
                    <Icon name="new-tab-button" height={37} width={37} color='#7ac3ff' />

                    <TextInput placeholder='ex : 21/12/2021'
                        style={styles.input_time}
                        onChangeText={(text)=> sethari_tanggal(text)}
                    ></TextInput>
                </View>


                <Text style={styles.textConfig}>Waktu</Text>
                <View style={styles.pelabuhan}>
                    <Icon name="set-alarm" height={37} width={37} color='#7ac3ff' />

                    <TextInput placeholder='ex : 15:00'
                        style={styles.input_time}
                        onChangeText={(text)=> setjam_waktu(text)}
                    ></TextInput>
                </View>


                <View style={styles.kategori_jumlah}>
                    <Icon name="round-account-button-with-user-inside" height={37} width={37} color='#7ac3ff' />

                    <TouchableOpacity
                        style={styles.touchInputFormBawah}
                        onPress={() => changeMV_Kategori(true)}
                    >
                        <Text style={styles.textTouch}>{chooseK_Penumpang}</Text>
                    </TouchableOpacity>
                    <Modal
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisibleKategori}
                        nRequestClose={() => changeMV_Kategori(false)}
                    >
                        <PickerKategori
                            changeMV_Kategori={changeMV_Kategori}
                            setData={setK_Penumpang}
                        />
                    </Modal>

                    <Icon name="create-group-button" height={37} width={37} color='#7ac3ff' />
                    <TextInput placeholder='Jumlah'
                        style={styles.inputJumlah}
                        onChangeText={(text)=> setpenumpang(text)}
                    ></TextInput>
                </View>


                <View style={styles.btnContainer}>
                    <TouchableOpacity
                    style={styles.pesanTouch}
                    onPress={send}
                    >
                        <Text style={styles.pesanButtonText}>Pesan Tiket</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.NavContainer}>
                <View style={styles.NavBar}>
                    <Pressable style={styles.IconBehave}
                        android_ripple={{ borderless: true, radius: 30 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="home-button" height={26} width={26} color='#000000' />
                        <Text style={styles.NavTextActive}>Home</Text>
                    </Pressable>

                    <Pressable onPress={send} style={styles.IconBehave}
                        android_ripple={{ borderless: true, radius: 30 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="google-drive-document" height={26} width={26} color='#FFFFFF' />
                        <Text style={styles.NavText}>Order</Text>
                    </Pressable>

                    <Pressable onPress={cancel} style={styles.IconBehave}
                        android_ripple={{ borderless: true, radius: 30 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="cancel-button" height={26} width={26} color='#FFFFFF' />
                        <Text style={styles.NavText}>CancelOrder</Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Others')} style={styles.IconBehave}
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
    inputJumlah: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        width: '20%',
        marginLeft: 10,
        paddingLeft: 10,
        fontSize: 15,
    },

    input_time: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        width: '80%',
        marginLeft: 6,
        paddingLeft: 10,
        fontSize: 15,
    },


    btnContainer: {
        justifyContent: 'center',
        margin: 10,
    },

    pesanTouch: {
        backgroundColor: '#7ac3ff',
        borderRadius: 6,
        width: '40%',
    },

    pesanButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 8,
    },

    textConfig: {
        fontSize: 16,
        paddingTop: 4,
        fontWeight: 'bold',
    },

    pelabuhan: {
        flexDirection: 'row',
        paddingTop: 1,
    },

    kategori_jumlah: {
        flexDirection: 'row',
        paddingTop: 25,
    },

    textTouch: {
        fontSize: 15,
        color: '#8c8c8c',
        paddingLeft: 5,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 5,
    },

    touchInputForm: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        width: '80%',
        marginLeft: 5,
    },

    touchInputFormBawah: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        width: '45%',
        marginLeft: 5,
        marginRight: 15,
    },


    judulText: {
        alignItems: 'center',
        color: '#7ac3ff',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 8,
    },

    FormBox: {
        marginTop: 40,
        position: 'absolute',
        width: '90%',
        height: '75%',
        backgroundColor: '#ffffff',
        top: 10,
        borderRadius: 10,
        elevation: 100,
        alignItems: 'center',
    },

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
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

    IconBehave: {
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

export default HomeScreen