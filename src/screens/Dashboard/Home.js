import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
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

const HomeScreen = () => {
  const list = useSelector((state) => state.videos.list);
  const dispatch = useDispatch();

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
  return (
    <View style={styles.containerDashboard}>
      <Header title={'Home'} dashboard={true} />
      <SliderImg slideImgs={imgs} />
      <PointsContainer />
      <QRCodeContainer />
    </View>
  );
};

export default HomeScreen;
