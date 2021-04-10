import React from 'react';
import { View, Dimensions,TouchableOpacity,Image } from 'react-native';

import Images from '../../utility/Image';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import * as Navigation from '../../navigation/navigation';

const onSuccess = (e) => {
  Navigation.navigate('Home', { data: e.data });
};

const ScanQrCode = () => {
  return (
    <View
      style={{ flex: 1 }}>

<TouchableOpacity   onPress={() => Navigation.goBack()}
  >
<Image
        source={Images.back}
        
         
        resizeMode="contain"></Image>
        </TouchableOpacity>

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