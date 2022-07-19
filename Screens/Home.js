import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput, FlatList, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ViewSlider from 'react-native-view-slider'
const { width, height } = Dimensions.get('window');



const Premium = () => {
    return (
        <View style={styles.topSpace}>
            <TouchableOpacity>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#0563DB', '#0F8CFF', '#0252CA']} style={styles.linearGradient}>
                    <View style={{ marginTop: 14, marginLeft: 16 }}>
                        <Text style={styles.buttonText}>
                            Unlock Premium
                        </Text>
                        <Text style={[styles.buttonText, { fontSize: 12, width: '75%', marginTop: 5 }]}>
                            Create Unlimited HD Scan & Picture to Text Scans without watermarks
                        </Text>
                    </View>
                    <View style={styles.triangle}>
                        <Image source={require('../assets/SlashImage.png')} />
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

const Tabs = () => {
    return (
        <View style={styles.scanParent}>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Image source={require('../assets/single.png')} />
                <Text style={styles.scanText}>Single Scan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Image source={require('../assets/batch.png')} />
                <Text style={styles.scanText}>Batch Scan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Image source={require('../assets/OCR.png')} />
                <Text style={styles.scanText}>Scan to Text</Text>
            </TouchableOpacity>
        </View>
    )
}


const Carousel = ({ data }) => {
    return (
        <View>
            <ViewSlider
                renderSlides={
                    <ScrollView horizontal={false}>
                        <FlatList
                            data={data}
                            horizontal
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity onPress={() => console.log(index)} style={{ marginHorizontal: 10 }}>
                                        <Image source={item.img} />
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </ScrollView>
                }
            // style={styles.slider}
            // height={height}
            />
        </View>)
}

const HomeScreen = ({ navigation }) => {
    const data = [{
        id: 1,
        img: require("../assets/1.png")
    },
    {
        id: 2,
        img: require("../assets/2.png")
    },
    {
        id: 3, img: require("../assets/3.png")
    },
    {
        id: 4, img: require("../assets/4.png")
    },
    {
        id: 6, img: require("../assets/5.png")
    },
    {
        id: 7, img: require("../assets/6.png")
    },
    {
        id: 8, img: require("../assets/1.png")
    },
    ]
    const [search, setSearch] = useState('')
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={['#E5E5E5', '#f8f8f8', '#fefefe']} style={{ flex: 1 }} >
                <ScrollView>
                    <View style={styles.welcParent}>
                        <View>
                            <Text style={styles.goodE}>Good Evening</Text>
                            <Text style={styles.wel}>Welcome back</Text>
                        </View>
                        <Image style={{ height: 38, width: 38 }} source={require('../assets/Premium.png')} />
                    </View>

                    <Premium />
                    <View style={styles.topSpace}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', flexDirection: 'row', width: '90%', alignSelf: 'center', borderRadius: 22 }}>
                            <Image source={require('../assets/Search.png')} style={{ height: 16, width: 16, }} />
                            <TextInput
                                style={{ width: '85%', color: '#000', marginLeft: 10 }}
                                placeholder='Search through your scans'
                                value={search}
                                onChangeText={(e) => {
                                    setSearch(e)
                                }}
                            />
                        </View>

                    </View>
                    <Tabs />
                    <View style={styles.floderParent}>
                        <Text style={styles.folderText}>Recent Scans</Text>
                    </View>


                    <Carousel data={data} />
                </ScrollView>
                {/* <Footer /> */}
                <View>
                    <View style={styles.floderParent}>
                        <Text style={styles.folderText}>Floders</Text>
                        <Image style={{}} source={require('../assets/Folder.png')} />

                    </View>
                    <View style={{ width: '100%', backgroundColor: '#F3F3F3', height: 54, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <TouchableOpacity>
                            <Image source={require('../assets/f1.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: -40 }}>
                            <Image source={require('../assets/f2.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/f3.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    wel: {
        fontSize: 16,
        fontWeight: '500',
        color: '#9B9B9B'
    },
    goodE: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    welcParent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        paddingHorizontal: 22,
        marginTop: 30
    },
    topSpace: {
        marginTop: 22,
    },
    floderParent: {
        width: '88%',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 22,
        marginBottom: 22
    },
    folderText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    scanParent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 22
    },
    scanText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#000',
        marginTop: 10
    },
    linearGradient: {
        height: 85,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        position: 'relative'
    },
    buttonText: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    triangle: {
        position: 'absolute',
        right: 0,
        top: 0,
    }


});