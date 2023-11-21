import React from 'react';
import { View, StyleSheet, StatusBar, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import AddResearchPaper from './AddResearchPaper'

const DataEntryMainPage = (props) => {
    return (
        <View style={styles.MainContainer}>
            <View style={styles.topBar}>
                <View style={styles.topBarSections}>
                    <TouchableOpacity>
                        <Image style={styles.backImage} source={require('../assets/backbtn.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.topBarSection1}>
                    <View style={styles.topBarSection1.titleBar}>
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                </View>
                <View style={styles.topBarSections}>

                </View>
            </View>
            <View style={styles.ScreenBody}>
                {props.screen}
            </View>
        </View>
    );
}
const statusBarHeight = StatusBar.currentHeight || 0
const styles = StyleSheet.create({
    MainContainer: {
        height: Dimensions.get('window').height - statusBarHeight,
        backgroundColor:"#fff"
    },
    topBar: {
        height: 70,
        flexDirection: 'row',
    },
    backImage: {
        height: 20,
        width: 20
    },
    topBarSection1: {
        flex: 9,
        titleBar: {
            flex: 1,
            paddingLeft: 20,
            justifyContent: 'center',
            backgroundColor: 'rgba(98, 141, 130, 0.1)',
            margin: 10,
            marginTop: 12,
            borderRadius: 8,
        }
    },
    topBarSections: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    TopBarImgs: {
        width: 30,
        height: 30,
    },
    ScreenBody: {
        height: Dimensions.get('window').height - statusBarHeight - 70,
    },
    title:{
        fontSize:17,
        color:"#000",
        fontFamily:"Raleway-Medium"
    }
})

export default DataEntryMainPage;
