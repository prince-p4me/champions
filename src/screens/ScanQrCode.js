import React from 'react';
import { View, Dimensions } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import * as Navigation from '../navigation/navigation';

const onSuccess = (e) => {
  Navigation.navigate('Home', { data: e.data });
};
const ScanQrCode = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <QRCodeScanner
        style={{ flex: 1 }}
        flashMode={RNCamera.Constants.FlashMode.auto}
        onRead={onSuccess}
        cameraStyle={{ height: Dimensions.get('window').height - 60 }}
        topViewStyle={{ flex: 0 }}
        bottomViewStyle={{ flex: 0 }}
      />
    </View>
  );
};
export default ScanQrCode;
