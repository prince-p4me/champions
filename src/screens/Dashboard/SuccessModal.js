import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  // Modal
} from 'react-native';
import Colors from '../../utility/Color';
import congrat from '../../assets/imgs/amazon.png';
import Images from "../../utility/Image";
import { TextMedium, TextSemiBold } from '../../components/TextView';
import i18n from '../../services/i18n';
import FullButton from '../../components/FullButton';
import Sizes from '../../utility/Sizes';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-native-modal';
import Clipboard from "@react-native-community/clipboard";
import Toast from "react-native-simple-toast";

const SuccessModal = (props) => {
  const { visible, close } = props;
  const isRtl = useSelector((state) => state.isRtl);

  return (
    <Modal isVisible={visible} style={{ margin: 0 }}>
      <View style={{ flex: 1, backgroundColor: Colors.bgColor }}>
        <View style={styles.firstSection}>
          <TouchableOpacity
            style={[styles.closeBtn, isRtl ? { left: 20 } : { right: 20 }]}
            onPress={() => close()}>
            <Image source={Images.close} style={{
              width: 30, height: 30,
              tintColor: Colors.white,
              resizeMode: "contain"
            }}></Image>
          </TouchableOpacity>
          <Image
            source={congrat}
            style={{
              width: 100,
              height: 70,
              borderRadius: 15,
            }}
            resizeMode="contain"></Image>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <TextMedium text={i18n.t('congrat')} style={styles.congrats} />
            <TextMedium text={i18n.t('won_points')} style={styles.congrats} />
            <View style={styles.congratsText}>
              <TextSemiBold
                text="10,000"
                style={[styles.congrats, { fontSize: Sizes.large }]}
              />
              <View style={{ width: 5 }}></View>
              <Image source={Images.star} style={{
                width: 15, height: 15,
                tintColor: Colors.semiGold,
                resizeMode: "contain"
              }}></Image>
            </View>
          </View>
          <View style={{ width: '60%' }}>
            <FullButton
              text={i18n.t('go_redeem')}
              btnStyle={styles.outlineBtn}
              textStyle={styles.outlineBtnText}
              onPress={() => {
                console.log('going to redeem history');
                close();
              }}></FullButton>
          </View>
        </View>
        <View style={styles.secondSection}>
          <TextMedium
            text={i18n.t('earn_point')}
            style={[styles.congrats, { color: Colors.black }]}
          />

          <TouchableOpacity style={styles.dashButton} onPress={async () => {
            await Clipboard.getString("https://www.google.com/");
            Toast.showWithGravity("Copied successfully . . .", Toast.LONG, Toast.BOTTOM);
          }}>
            <View style={{ flex: 1 }}>
              <TextMedium
                text="https://www.google.com/"
                style={[styles.congrats, { color: Colors.darkBGgray }]}
              />
            </View>
            <View style={styles.copySection}>
              <TextMedium
                text={i18n.t('copy')}
                style={[styles.congrats, { color: 'blue' }]}
              />
            </View>
          </TouchableOpacity>

          <View style={{ width: '60%' }}>
            <FullButton
              text={i18n.t('go_reward')}
              bgColor={Colors.theme}
              textStyle={styles.outlineBtnText}
              onPress={() => {
                console.log('going to redeem history');
                close();
              }}></FullButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeBtn: {
    position: 'absolute',
    top: 20,
  },
  firstSection: {
    backgroundColor: Colors.green,
    flex: 7,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  secondSection: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  copySection: {
    width: 80,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderStartWidth: 1,
    borderColor: Colors.darkBGgray,
  },
  dashButton: {
    flexDirection: 'row',
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 25,
    borderColor: Colors.darkBGgray,
    overflow: 'hidden',
    alignItems: 'center',
  },
  congratsText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  congrats: {
    textAlign: 'center',
    fontSize: Sizes.medium,
    color: Colors.white,
  },
  outlineBtn: {
    borderColor: Colors.white,
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  outlineBtnText: {
    color: Colors.white,
    fontSize: Sizes.regular,
    fontWeight: '400',
  },
});

export default SuccessModal;
