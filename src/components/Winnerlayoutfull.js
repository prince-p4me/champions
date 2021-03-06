import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Image } from 'react-native';
import { TextBold, TextRegular, TextSemiBold, TextThin } from './TextView';
import i18n from '../services/i18n';
import Color from'../utility/Color'

import star from '../assets/imgs/star.png';
import Images from'../utility/Image'
 import earned from '../assets/imgs/earned.png';
import Redeem from '../assets/imgs/Redeem.png';
import Balance from '../assets/imgs/Balance.png';
import Sizes from "../utility/Sizes"
import styles from '../utility/Style';
import About from '../assets/imgs/user.jpeg';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Winnerlayoutfull = () => {
  const isRtl = useSelector((state) => state.isRtl);
  const align = isRtl ? "right" : "left";
  const data = useSelector((state) => state.getPoints);

  return (
    <View >
        <View style={styles.winnercontainerfull}>
          <Image source={Images.avatar} style={{height:60,width:60,borderRadius:100,alignSelf:'center',marginLeft:10}}></Image>
         <View style={{marginLeft:30,flex:1}}>

        
          <TextSemiBold
            text="Vijay Gupta"
            style={{ textAlign: align, fontSize: Sizes.semiLarge,marginTop:10}}
          />
          <View style={{flexDirection:'row',marginTop:5}}>
        
          <TextThin
            text="Vivo Z1 Pro"
            style={{ textAlign: align, fontSize: Sizes.regular ,marginTop:5}}
          />
          
          </View>

          <View style={{flexDirection:'row',marginTop:5}}>
         
        
          <TextThin
            text="Vivo Z1 Pro"
            style={{ textAlign: align, fontSize: Sizes.regular ,marginTop:5,color:Color.semiGold}}
          />
           <Image source={Images.star} style={{height:20,width:20,alignSelf:'center',tintColor:Color.semiGold}}
         resizeMode="contain"></Image>
          </View>
       

       
       </View>

<View>
  <TextRegular text={`Win~\nVivo Z1 Pro`} style={{align:"center"}}
  >

  </TextRegular>
       <Image source={Images.iphone} style={{height:50,width:50,marginRight:10}}
         resizeMode="contain"></Image>
        
</View>
  
       </View>
           
    </View>
  );
};

export default Winnerlayoutfull;
