import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header';
import Colors from '../../utility/Color';
import styles from '../../utility/Style';
import { doLogin, setLoading } from '../../redux/action';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import * as Navigation from '../../navigation/navigation';
import SliderImg from '../../components/SliderImg';

import PointsContainer from '../../components/PointsContainer';
import QRCodeContainer from '../../components/QRCodeContainer';
import slider1 from '../../assets/imgs/slider/1.png';
import slider2 from '../../assets/imgs/slider/2.png';
import * as actions from '../../redux/action';

import SuccessModal from './SuccessModal';

const HomeScreen = () => {
  const list = useSelector((state) => state.getBanners);
  const user = useSelector((state) => state.getUser);
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

  const [imgs, setSlideImgs] = useState(slideImgs);
  const [visible, setModalVisible] = useState(false);

  return (
    <View style={styles.containerDashboard}>
      <SuccessModal
        visible={visible}
        close={() => {
          console.log('closing modal');
          setModalVisible(false);
        }}
      />

      <Header title={'Home'} dashboard={true} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SliderImg slideImgs={imgs} />
        <PointsContainer />
        <QRCodeContainer />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
