import { View, StyleSheet, Dimensions } from 'react-native';
import Color from './Color';

export default StyleSheet.create({
    mikeButton: {
        width: 60, height: 60,
        position: "absolute",
        bottom: 35, right: 20,
        backgroundColor: Color.theme,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    item: {
        // flexDirection: 'row',
        height: 200,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 20,
        // marginVertical: 8,
        // marginHorizontal: 16,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: "grey"

    },

    img: {
        // flex: 1,
        height: "100%",
        width: Dimensions.get("window").width,
        resizeMode: "stretch"
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
        paddingLeft: 60
    },
    drawerButton: {
        width: 55,
        height: 50,
        position: 'absolute',
        // backgroundColor: "yellow",
        color: "#fff",
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: { fontWeight: 'bold', fontSize: 18, color: Color.white, letterSpacing: 1 },
    safeArea: { backgroundColor: Color.theme, width: '100%' },
    center: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: "flex-start",
        // backgroundColor: "red",
    },
    sideIcon: { width: 28, height: 15, tintColor: Color.white },
    noData: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});