import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header';
import styles from '../../utility/Style';
import { useSelector, useDispatch } from 'react-redux';
import SliderImg from '../../components/SliderImg';

import PointsContainer from '../../components/PointsContainer';
import QRCodeContainer from '../../components/QRCodeContainer';
import * as actions from '../../redux/action';
import SuccessModal from './SuccessModal';

const HomeScreen = props => {
  const list = useSelector((state) => state.getBanners);
  const dispatch = useDispatch();
  if (props.route.params && props.route.params.data) {
    let { data } = props.route.params;
    console.log("scan data", data);
    console.log("executing data");
    data = data.split(",");
    console.log("scan data array", data);
    let obj = { "qr_id": data[0], "points": data[1] };
    dispatch(actions.scanQr(obj));
  }

  useEffect(() => {

    dispatch(actions.getBanners());
  }, []);

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
        {(list && list.length) ? <SliderImg slideImgs={list} /> : <View />}
        <PointsContainer />
        <QRCodeContainer />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
