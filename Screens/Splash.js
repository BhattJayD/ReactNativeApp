import React, { useRef, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import ViewSlider from 'react-native-view-slider'
const { width, height } = Dimensions.get('window');

const Splash = ({ navigation }) => {
    const data = [{
        id: 1,
        head: 'Scan anything in HD, wherever you are...',
        context: 'Simply launch the AirScan app and scan any document, papers or real world photographs in seconds. ',
        img: require("../assets/1.png")
    },
    {
        id: 2,
        head: 'Navigate work documents like a Pro',
        context: 'Scan and organize your work documents in structured folders. Scan single or multiple documents in one swift go. Merge scans into PDFs, reorder pages and share them on the fly.  ',
        img: require("../assets/2.png")
    },
    {
        id: 3,
        head: 'Less time scanning homework = more time for fun',
        context: 'Scanning of homework and assignments are a breeze with AirScan. Capture scans, generate PDFs and push them to any app installed on your phone. Its that easy!',
        img: require("../assets/3.png")
    },
    {
        id: 4,
        head: 'Covert Pictures to Text with our next generation offline OCR',
        context: 'Leverage our cutting edge machine learning OCR to convert documents to text in seconds with accurate results. Share OCR scans as Doc files or PDFs in seconds',
        img: require("../assets/4.png")
    }
    ];


    return (
        <View style={{ flex: 1, backgroundColor: '#E5E5E5', justifyContent: 'center', alignItems: 'center' }}>
            <ViewSlider
                renderSlides={
                    <ScrollView horizontal={false}>

                        <FlatList
                            data={data}
                            horizontal
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={styles.viewBox}>
                                        <Image source={item.img} />
                                        <Text style={[styles.title, { width: '65%' }]}>{item.head}</Text>
                                        <Text style={styles.description}>{item.context}</Text>
                                        {
                                            data.length - 1 == index &&

                                            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.rightBtn}>
                                                <Image source={require('../assets/next.png')} />
                                            </TouchableOpacity>
                                        }
                                    </View>
                                )
                            }}
                        />
                    </ScrollView>

                }
                style={styles.slider}     //Main slider container style
                height={height}    //Height of your slider
                slideCount={4}    //How many views you are adding to slide
                dots={true}     // Pagination dots visibility true for visibile 
                dotActiveColor='#49A6FC'     //Pagination dot active color
                dotInactiveColor='#9B9B9B'    // Pagination do inactive color
                dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
            />
        </View>

    );
}

export default Splash;
const styles = StyleSheet.create({
    viewBox: {
        width: width,
        height: height,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor:'lime'
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    dotContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 100,

    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        color: '#000',
        width: '50%',
        marginTop: 85
    },
    description: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500', color: '#000',
        width: '75%',
        marginTop: 15,
        marginBottom: 125,
    },
    rightBtn: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: '#49A6FC',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 20,
        bottom: 100
    }
});