import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import MainScreen from './organizer/MainScreen/MainScreen';
import DataEntryMainPage from './organizer/DataEntryScreens/DataEntryMainPage';
import LoginScreen from './organizer/login/login';
import IntellectualProperty from './organizer/dataScreens/intellectualPropertyList'
import IntellectualPropertyDetail from './organizer/dataScreens/intellectualPropertyDetail';
const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <DataEntryMainPage title="Intellectual Property" screen=<IntellectualProperty /> />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
  },
  topContent: {
    flex: 2.5,
  },
  bottomContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mainText: {
    fontSize: 32,
    color: '#000',
  },
  googleOrText: {
    fontSize: 15,
    marginBottom: 10,
    color: '#000',
  },
  googleButton: {
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 34,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButtonText: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '600',
  },
  googleIcon: {
    height: 24,
    width: 24,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    marginTop: 12,
    paddingHorizontal: 8,
  },
  inputContent: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginButtonStyle: {
    backgroundColor: "#2d96f8",
    borderColor: "#2d96f8",
    borderWidth: 1,
    borderStyle: "solid",
    width: '80%',
    borderRadius: 8,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 32,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
  ,
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  }
});

export default App;
