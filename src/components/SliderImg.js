import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from '../utility/Style';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

const _renderItem = ({ item, index }) => {
  const { width } = Dimensions.get('window').width;
  console.log("img url is", item.imgUrl);
  return (
    <View style={styles.slide}>
      <Image
        source={{ uri: item.imgUrl }}
        style={{ width: width, resizeMode: 'contain' }}></Image>
    </View>
  );
};

const SliderImg = (props) => {
  const { slideImgs } = props;
  // console.log("slideImgs", slideImgs);
  return (
    <View style={{ height: 170 }}>
      <Carousel
        data={slideImgs}
        renderItem={_renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        firstItem={1}
      />
    </View>
  );
};

export default SliderImg;
