import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, StatusBar, Image } from 'react-native';
const statusBarHeight = StatusBar.currentHeight || 0
const MainScreen = () => {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.topBarSections}>

        </View>
        <View style={styles.topBarSection1}>
          <Text style={styles.title}>Pi360</Text>
        </View>
        <View style={styles.topBarSections}>
        <Image style={styles.navImgs.dept} source={require('../assets/user.png')} />

        </View>
      </View>

      {/* Content Area */}
      <View style={styles.content}>
        <Text></Text>
      </View>

      {/* Navigation Bar */}
      <View style={styles.navigationBar}>

        <TouchableOpacity style={styles.navItem}>
          <Image style={styles.navImgs.home} source={require('../assets/home.png')} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image style={styles.navImgs.home} source={require('../assets/res.png')} />
          <Text style={styles.navText}>Research</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image style={styles.navImgs.home} source={require('../assets/staff.png')} />
          <Text style={styles.navText}>Staff</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image style={styles.navImgs.dept} source={require('../assets/dept.png')} />
          <Text style={styles.navText}>Department</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image style={styles.navImgs.home} source={require('../assets/achi.png')} />
          <Text style={styles.navText}>Achievements</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topBar: {
    height: 60,
    flexDirection: 'row',
  },
  topBarSection1: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topBarSections: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    color: 'black',
    fontSize: 25,

  },
  content: {
    height: Dimensions.get('window').height - 120 - statusBarHeight,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60, // Adjust the height as needed


  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',

  },
  navText: {
    fontSize: 10,
    fontWeight: '500',
  },
  navImgs: {
    home: {
      width: 30,
      height: 30,
    },
    dept: {
      width: 35,
      height: 30,
    }
  },
  profile:{
    flex:1,
    margin:10,

  }
});

export default MainScreen;
