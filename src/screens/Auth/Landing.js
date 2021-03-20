import React from 'react';
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import globalStyles from '../../utility/Style';
import Images from '../../utility/Image';
import Constant from '../../utility/Constant';
import * as Navigation from '../../navigation/navigation';
import Color from '../../utility/Color';
import Sizes from '../../utility/Sizes';
import { TextBold, TextRegular } from '../../components/TextView';
import i18n from 'i18n-js';

const LandingScreen = ({ route }) => {

    return (
        <ImageBackground source={Images.bgGreen} resizeMode="cover"
            style={globalStyles.container}>
            <View style={styles.firstSection}>
                <Image source={Images.champLogo}
                    style={{ width: "100%", height: "30%" }} resizeMode="contain"></Image>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.button} activeOpacity={.7}
                        onPress={() => Navigation.navigate("SignIn")}>
                        <TextBold text={i18n.t('login')}
                            style={{ color: Color.theme, fontSize: Sizes.medium }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: Color.semiGold }]} activeOpacity={.7}>
                        <TextRegular text={i18n.t('signup')}
                            style={{ color: Color.white, fontSize: Sizes.medium }} />
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={Images.saina}
                style={{ flex: 5 }} resizeMode="contain"></Image>
        </ImageBackground>
    );
};
export default LandingScreen;

const styles = StyleSheet.create({
    firstSection: {
        width: Constant.width,
        flex: 5,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: "18%"
    },
    btnContainer: {
        height: "50%", width: "100%",
        paddingVertical: "5%",
        justifyContent: "space-between"
    },
    button: {
        width: "100%",
        backgroundColor: Color.white,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        height: 45
    }
})