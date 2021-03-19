import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Header from '../../components/Header';
import styles from '../../utility/Style';
import * as Navigation from '../../navigation/navigation';

const Detail = ({ route }) => {

    return (
        <View style={styles.container}>
            <Header title={"Detail"} back={true} />
            <View style={[styles.center]}>

            </View>
        </View>
    );
};
export default Detail;