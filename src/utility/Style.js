import { View, StyleSheet, Dimensions } from 'react-native';
import Color from './Color';
import Constant from './Constant';

export default StyleSheet.create({
  dialCode: {
    width: 50,
    height: 45,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  inputBox: {
    width: Constant.width - 64,
    height: 45,
    backgroundColor: Colors.bgGray,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 50,
    overflow: 'hidden',
  },
  mikeButton: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 35,
    right: 20,
    backgroundColor: Color.theme,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    // flexDirection: 'row',
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },

  img: {
    // flex: 1,
    height: '100%',
    width: Dimensions.get('window').width,
    resizeMode: 'stretch',
    // width: 50,
    // height: 50,
    // marginRight: 20,
  },
  submit: {
    backgroundColor: Color.theme,
    width: 100,
    height: 45,
    borderColor: 'black',
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    height: 45,
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: Color.theme,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: 60,
  },
  drawerButton: {
    width: 55,
    height: 50,
    position: 'absolute',
    // backgroundColor: "yellow",
    color: '#fff',
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Color.white,
    letterSpacing: 1,
  },
  safeArea: { backgroundColor: Color.theme, width: '100%' },
  center: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.white,
    // justifyContent: "flex-start",
    // backgroundColor: "red",
  },
  containerDashboard: {
    flex: 1,
    backgroundColor: Color.bgGray,
  },
  sideIcon: { width: 28, height: 15, tintColor: Color.white },
  noData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#eeeeee',
  },

  underlineStyleBase: {
    width: 60,
    height: 60,
    borderRadius: 14,
    borderWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#eeeeee',
    color: '#3cb244',
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  headerDashboard: {
    height: 70,
    width: '100%',
    backgroundColor: Color.theme,
    justifyContent: 'center',
    paddingStart: 20,
    paddingEnd: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingStart: -100,
  },
  headerCol: {
    flexDirection: 'column',
  },
  headerRightRow: {
    flexDirection: 'row',
    paddingStart: 40,
  },
  profileIcon: {
    width: 45, height: 45,
    borderRadius: 20,
  },

  rightHeaderIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain"
  },
  helpSpacing: { paddingStart: 15, paddingEnd: 15 },

  starIcon: {
    width: 20,
    height: 20,
  },

  pointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginStart: 10,
    marginBottom: 10,
  },
  pointTypesContainer: {
    backgroundColor: Color.white,
    height: 175,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Color.darkBGgray,
    marginStart: 1,
    marginEnd: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 6,
    marginBottom: 15,
  },
  pointTypeCol: {
    flexDirection: 'column',
    marginBottom: 20,
    marginTop: 10,
    marginStart: 10,
    alignItems: 'center',
  },
  pointTypeColMiddle: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: Color.darkBGgray,
    flexDirection: 'column',
    marginBottom: 20,
    marginTop: 10,
    marginStart: 10,
    alignItems: 'center',
  },
  point_border_container: {
    height: 135,
    marginTop: -90,
    // marginStart: 100,
    // paddingStart: 100,
    borderRightWidth: 1,
    borderColor: Color.darkBGgray,
  },
  pointIcon: {
    width: 100,
    height: 100,
    marginEnd: 10,
  },
  qrContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrIcon: {
    height: 140,
    width: 140,
  },
  slideImg: {
    width: 350,
  },
  slide: {
    height: 200,
  },
  scrollViewContainerStyle: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // height: 600,
  },
  containerSlider: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  congratIcon: {
    height: 100,
    width: 100,
  },
  starIconSuccess: {
    width: 40,
    height: 40,
  },
});
