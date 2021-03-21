import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';
import Header from '../../components/Header';
import Colors from '../../utility/Color';
import styles from '../../utility/Style';
import {doLogin, setLoading} from '../../redux/action';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../../components/Loader';
import * as Navigation from '../../navigation/navigation';

import SliderImg from '../../components/SliderImg';

import PointsContainer from '../../components/PointsContainer';
import QRCodeContainer from '../../components/QRCodeContainer';
import slider1 from '../../assets/imgs/slider/1.png';
import slider2 from '../../assets/imgs/slider/2.png';

import congrat from '../../assets/imgs/congrat.png';
import star from '../../assets/imgs/star.png';

import * as actions from '../../redux/action';

import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';
import {TextBold, TextMedium} from '../../components/TextView';
import i18n from 'i18n-js';

import FullButton from '../../components/FullButton';
import {TouchableHighlight} from 'react-native-gesture-handler';
const HomeScreen = () => {
  // const list = useSelector((state) => state.getBanners);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actions.getBanners);
  // }, []);

  const slideImgs = [
    {
      name: 'Saina1',
      img: slider1,
    },
    {
      name: 'Saina2',
      img: slider2,
    },
    {
      name: 'Saina2',
      img: slider2,
    },
    {
      name: 'Saina2',
      img: slider2,
    },
  ];
  const childRef = useRef();
  const [search, setSearch] = useState('');
  const [speechModal, setSpeechModal] = useState(false);

  const [imgs, setSlideImgs] = useState(slideImgs);
  const {height} = Dimensions.get('window').height;
  let width = Dimensions.get('window').width;
  const [visible, setModalVisible] = useState(true);

  return (
    <View style={styles.containerDashboard}>
      <Header title={'Home'} dashboard={true} />
      <SliderImg slideImgs={imgs} />
      <PointsContainer />
      <QRCodeContainer />

      <View>
        <Modal isVisible={visible} style={{margin: 0}}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
              bottom: 370,
              backgroundColor: Colors.green,
              borderBottomLeftRadius: 34,
              borderBottomRightRadius: 34,
            }}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Icon
                  name="x"
                  size={45}
                  color={Colors.white}
                  style={{
                    position: 'absolute',
                    top: 36,
                    right: 20,
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 100,
                  marginBottom: 40,
                }}>
                <Image source={congrat} style={styles.congratIcon}></Image>
              </View>

              <View>
                <TextMedium
                  text={i18n.t('congrat')}
                  style={{
                    textAlign: 'center',
                    fontSize: Sizes.extraLarge,
                    color: Colors.white,
                  }}
                />

                <TextMedium
                  text={i18n.t('won_points')}
                  style={{
                    textAlign: 'center',
                    fontSize: Sizes.extraLarge,
                    color: Colors.white,
                    marginVertical: 10,
                    marginBottom: 27,
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TextMedium
                    text={'100'}
                    style={{
                      textAlign: 'center',
                      fontSize: Sizes.extraDouble2x,
                      color: Colors.white,
                      marginEnd: 10,
                    }}
                  />
                  <Image source={star} style={styles.starIconSuccess}></Image>
                </View>

                <View
                  style={{
                    borderColor: Colors.white,
                    borderWidth: 1,
                    marginStart: 20,
                    marginEnd: 20,
                    marginTop: 25,
                    borderRadius: 27,
                    paddingTop: 20,
                    paddingBottom: 20,
                  }}>
                  <TextMedium
                    text={i18n.t('Redeem_POINT')}
                    style={{
                      textAlign: 'center',
                      fontSize: Sizes.semiLarge,
                      color: Colors.white,
                      marginEnd: 10,
                      // paddingStart: 50,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              position: 'absolute',
              bottom: 0,
              top: 0,
              zIndex: -9999,
              left: 0,
              right: 0,
              backgroundColor: Colors.bgGray,
            }}>
            <View
              style={{position: 'absolute', bottom: 300, left: width / 5 - 10}}>
              <TextMedium
                text={i18n.t('earn_point')}
                style={{
                  textAlign: 'center',
                  fontSize: Sizes.medium,
                  color: Colors.black,
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 200,
                left: width / 5,
                borderWidth: 1,
                // paddingStart: width / 2,
                // paddingEnd: 70,
                paddingTop: 12,
                paddingBottom: 12,
                borderStyle: 'dotted',
                borderColor: Colors.darkBGgray,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingStart: 20,
                  width: width / 1.5,
                }}>
                <View
                  style={{
                    borderRightWidth: 1,
                    borderRightColor: 'black',
                    paddingEnd: 10,
                    paddingStart: 4,
                  }}>
                  <TextMedium
                    text={'https://www.google.com/'}
                    style={{
                      textAlign: 'left',
                      fontSize: Sizes.medium,
                      color: Colors.black,
                    }}
                  />
                </View>

                <TextMedium
                  text={'copy'}
                  style={{
                    textAlign: 'right',
                    fontSize: Sizes.medium,
                    color: Colors.black,
                    paddingEnd: 10,
                  }}
                />
              </View>
            </View>

            <View style={{position: 'absolute', bottom: 100, left: width / 4}}>
              <FullButton
                bgColor={Colors.theme}
                onPress={() => {}}
                text={i18n.t('go_reward')}
                textColor={Colors.white}
                btnStyle={{paddingStart: 15, paddingEnd: 16}}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default HomeScreen;
