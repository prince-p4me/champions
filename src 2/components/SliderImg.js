import React from 'react';
import { View } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';
import Color from '../utility/Color';


const SliderImg = (props) => {
  const { slideImgs } = props;
  return (
    <View style={{ marginBottom: 10 }}>
      <FlatListSlider data={slideImgs ? slideImgs : []}
        height={170}
        timer={10000}
        onPress={index => {
          // console.log(JSON.stringify(index));
          // bannerClicked(banners[index]);
        }}
        contentContainerStyle={{ paddingHorizontal: 2 }}
        indicatorContainerStyle={{ position: 'absolute', bottom: 10 }}
        indicatorActiveColor={Color.semiGold}
        indicatorInActiveColor={Color.white}
        indicatorActiveWidth={30}
        animation
      />
    </View>
  );
};

export default SliderImg;
