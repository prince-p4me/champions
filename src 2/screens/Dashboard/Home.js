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
import * as Actions from '../../redux/action';
import SuccessModal from './SuccessModal';
import { connect } from 'react-redux'
// import { NavigationEvents } from 'react-navigation';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      points: ""
    }
    this.props.navigation.addListener('focus', () => {
      // do something
      console.log("rendered again and checking the props");
      this.checkProps();
    });
  }

  checkProps = () => {
    if (this.props.route.params && this.props.route.params.data) {
      let { data } = this.props.route.params;
      console.log("scan data", data);
      console.log("executing data");
      data = data.split(",");
      console.log("scan data array", data);
      let obj = { "qr_id": data[0], "points": data[1] };
      this.setState({
        points: obj.points
      }, () => {
        this.props.scanQr(obj)
      })
    } else {
      this.props.getBanners();
    }
  }

  render() {
    let { visible, list } = this.props;
    let { points } = this.state;
    return (
      <View style={styles.containerDashboard}>
        <SuccessModal visible={visible} points={points} />

        <Header title={'Home'} dashboard={true} />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {(list && list.length) ? <SliderImg slideImgs={list} /> : <View />}
          <PointsContainer />
          <QRCodeContainer />
        </ScrollView>
      </View>
    );
  }
};


const mapStateToProps = (state) => ({
  list: state.getBanners,
  visible: state.isSuccess
})

const mapDispatchToProps = (dispatch) => {
  return {
    scanQr: (data) => dispatch(Actions.scanQr(data)),
    getBanners: () => dispatch(Actions.getBanners()),
    getPoints: () => dispatch(Actions.getPoints()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)