import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import LoginLogic from './logic';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '685964264450-bs5hvpe981bj828conqk992mb5u8sjf8.apps.googleusercontent.com',
  offlineAccess: true,
});

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signinWithGoogle() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  // Function to handle email/password login
  const handleEmailLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      LoginLogic(email, password)

    } catch (error) {
      // Handle login error
      console.error('Email login error:', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.topContent}>
          <View style={styles.loginText}>
            <Text style={styles.mainText}>Login to pi360</Text>
          </View>
          <View style={styles.inputContent}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={(text) => setEmail(text)}
            />
            <TouchableOpacity style={styles.loginButtonStyle} onPress={handleEmailLogin} >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomContent}>
          <Text style={styles.googleOrText}>or login using</Text>
          <TouchableOpacity style={styles.googleButton} onPress={signinWithGoogle}>
            <Image
              style={styles.googleIcon}
              source={{
                uri: 'https://i.ibb.co/j82DCcR/search.png',
              }}
            />
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
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

export default LoginScreen;
