import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import styles from '../../utility/Style';
import Images from '../../utility/Image';
import Constant from '../../utility/Constant';
import * as Navigation from '../../navigation/navigation';
import Color from '../../utility/Color';
import { TextRegular } from '../../components/TextView';
import i18n from 'i18n-js';

const LandingScreen = ({ route }) => {

    return (
        <ImageBackground source={Images.bgGreen} resizeMode="cover"
            style={styles.container}>
            <View style={{
                width: Constant.width,
                flex: 6,
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: "18%"
            }}>
                <Image source={Images.champLogo}
                    style={{ width: "100%" }} resizeMode="contain"></Image>
                <View style={{ flex: 6, width: "100%", backgroundColor: "red" }}>
                    <TouchableOpacity style={{
                        width: "100%",
                        backgroundColor: Color.white,
                        borderRadius: 25,
                        justifyContent: "center",
                        alignItems: "center",
                        height: 45
                    }}>
                        <TextRegular text={i18n.t('login')} />
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={Images.saina}
                style={{
                    flex: 4
                }} resizeMode="contain"></Image>
        </ImageBackground>
    );
};
export default LandingScreen;