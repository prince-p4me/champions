import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Image } from 'react-native';
import { TextBold, TextSemiBold, TextThin } from './TextView';
import i18n from '../services/i18n';

import star from '../assets/imgs/star.png';
import earned from '../assets/imgs/earned.png';
import Redeem from '../assets/imgs/Redeem.png';
import Balance from '../assets/imgs/Balance.png';
import Sizes from "../utility/Sizes"
import styles from '../utility/Style';

const PointsContainer = () => {
  const isRtl = useSelector((state) => state.isRtl);
  const align = isRtl ? "right" : "left";

  return (
    <View>
      <View style={styles.pointContainer}>
        <TextBold
          text={i18n.t('points')}
          style={{ textAlign: align, fontSize: Sizes.extraDouble }}
        />

        <Image source={star} style={styles.starIcon}></Image>
      </View>

      <View style={styles.pointTypesContainer}>
        <View style={styles.pointTypeCol}>
          <Image source={earned} style={styles.pointIcon}></Image>
          <TextSemiBold
            text={20300}
            style={{ textAlign: align, fontSize: Sizes.double }}
          />
          <TextThin
            text={i18n.t('earned')}
            style={{ textAlign: align, fontSize: Sizes.double }}
          />
        </View>
        <View style={styles.pointTypeCol}>
          <Image source={Redeem} style={styles.pointIcon}></Image>
          <TextSemiBold
            text={20300}
            style={{ textAlign: align, fontSize: Sizes.double }}
          />
          <TextThin
            text={i18n.t('redeem')}
            style={{ textAlign: align, fontSize: Sizes.double }}
          />
        </View>
        <View style={styles.pointTypeColLast}>
          <Image source={Balance} style={styles.pointIcon}></Image>
          <TextSemiBold
            text={20300}
            style={{ textAlign: align, fontSize: Sizes.double }}
          />
          <TextThin
            text={i18n.t('balance')}
            style={{ textAlign: align, fontSize: Sizes.double }}
          />
        </View>
      </View>
    </View>
  );
};

export default PointsContainer;