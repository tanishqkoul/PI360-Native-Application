import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { LongInputField, ShortInputField } from './FeildComponents';
const AddResearchPaper = () => {
    return (
        <View style={styles.container}>
            <View style={styles.FelidsContainer}>
                <ShortInputField label1=" Name" placeholder1="First Name" placeholder2="Last Name" label2="Last Name" />
                <LongInputField label="Email" placeholder="Email" />
                <LongInputField label="Phone Number" placeholder="Phone Number" />
                <ShortInputField label1="Gender" placeholder1="Gender" placeholder2="Age" label2="Age" />

            </View>
            <View style={styles.SubmitButton}><TouchableOpacity style={styles.SubmitButton.button}>
                <Text style={styles.SubmitButton.button.text}>SUBMIT</Text>
            </TouchableOpacity></View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    FelidsContainer: {
        margin: 20,
        flex: 10
    },
    SubmitButton: {
        flex: 1,
        backgroundColor: '#2D96F8',
        button: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            text: {
                fontSize: 20,
                color: 'white'
            }
        }
    }

})

export default AddResearchPaper;
