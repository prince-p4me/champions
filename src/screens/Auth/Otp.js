import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Header from '../../components/Header';
import styles from '../../utility/Style';
import * as Navigation from '../../navigation/navigation';

const OtpScreen = ({ route }) => {

    return (
        <View style={styles.container}>
            <Header title={"OTP"} back={true} />
            <View style={[styles.center]}>

            </View>
        </View>
    );
};
export default OtpScreen;