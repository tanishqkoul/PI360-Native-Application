import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Dimensions, DatePickerAndroid, TouchableOpacity, Button, Modal } from 'react-native';
import DatePicker from 'react-native-date-picker';



const DatePickerButton = (dateState, setDateState) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    };

    return (
        <>
            <TouchableOpacity style={FieldStyles.ShortInput} onPress={showDatePicker} ><Text>{selectedDate.toISOString().split('T')[0]}</Text></TouchableOpacity >
            <Modal
                animationType="slide"
                transparent={false}
                visible={isDatePickerVisible}
                onRequestClose={hideDatePicker}
            >
                <View style={styles.datePickerContainer}>
                    <DatePicker
                        style={[FieldStyles.ShortInput,]}
                        date={selectedDate}
                        onDateChange={(date) => handleDateChange(date)}
                        mode="date"
                        timeZoneOffsetInMinutes={0}
                        locale='true'
                    />
                    <Button title="Done" onPress={hideDatePicker} />
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
    },
    selectedDate: {
        fontSize: 16,
    },
    datePickerContainer: {
        width: '100%',
        height: Dimensions.get("window").height,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});

const LongInputField = ({ label, placeholder, keyboardtype }) => {
    const [isFocused, setIsFocused] = useState(new Date());


    return (
        <View style={FieldStyles.container}>
            <View style={FieldStyles.LabelContainer}>
                <Text style={FieldStyles.LabelContainer.LabelText}>{label}</Text>
            </View>
            <TextInput
                placeholder={placeholder}
                style={[FieldStyles.input,]}

            />
        </View>
    );
};

const ShortInputField = ({ label1, placeholder1, label2, placeholder2, keyboardtype1 = "default", keyboardtype2 = "default" }) => {
    const [isFocused, setIsFocused] = useState(false);


    return (
        <View style={[FieldStyles.container, FieldStyles.FlexContainer]}>
            <View style={FieldStyles.ShortSection1}>
                <View style={FieldStyles.LabelContainer}>
                    <Text style={FieldStyles.LabelContainer.LabelText}>{label1}</Text>
                </View>
                <TextInput
                    placeholder={placeholder1}
                    style={[FieldStyles.ShortInput,]}
                    keyboardType={keyboardtype1}
                />
            </View>
            <View style={FieldStyles.ShortSection2}>
                <View style={FieldStyles.LabelContainer}>
                    <Text style={FieldStyles.LabelContainer.LabelText}>{label2}</Text>
                </View>
                <TextInput
                    placeholder={placeholder2}
                    style={[FieldStyles.ShortInput,]}
                />
            </View>
        </View>
    );
};





const FieldStyles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    FlexContainer: {
        flexDirection: 'row',
    },
    input: {
        width: '100%',
        height: 45,
        borderRadius: 5,
        paddingLeft: 10,
        borderColor: '#BBBBBB',
        marginTop: 5,
        borderRadius: 8,
        borderWidth: 1,

    },
    ShortInput: {
        width: '100%',
        height: 45,
        borderRadius: 5,
        paddingLeft: 10,
        borderColor: '#BBBBBB',
        marginTop: 5,
        borderRadius: 8,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    LabelContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        LabelText: {
            fontSize: 16,
            fontWeight: '600',
        }

    },
    ShortSection1: { flex: 1 },
    ShortSection2: { flex: 1, marginLeft: 10 }
});


export { LongInputField, ShortInputField }