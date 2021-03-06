import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    ScrollView,
    // Modal
} from 'react-native';
import Colors from '../../utility/Color';
import { TextRegular, TextBold, TextSemiBold } from '../../components/TextView';
import I18n from '../../services/i18n';
import Images from '../../utility/Image';
import Header from '../../components/Header';
import * as Navigation from '../../navigation/navigation';


const Profilemain = (props) => {



    return (
        <ScrollView>
            
        <View  >

            <Header title={'Profile'} dashboard={false} back={true} />

            <View style={{ flexDirection: 'row', backgroundColor: "white",marginTop:10 }}>

                <View style={{flex:1}} >
                    <Image
                        source={Images.user}

                        style={{ borderRadius: 100, height: 100, width: 100 ,marginLeft:10}}
                        resizeMode="cover"></Image></View>

                <View style={{flex:2}}>
                    <TextRegular
                        style={[styles.textstyle,{marginTop:15}]}
                        text="Vijay Gupta"

                    />
                    <TextRegular
                        style={[styles.textstyle,{marginTop:7}]}
                        text="Vijay@gmail.com"

                    />
                    <TextRegular
                        style={[styles.textstyle,{marginTop:7}]}
                        text="8802470198"

                    />


                </View>

                <TouchableOpacity onPress={() => {
  Navigation.navigate('editprofile');
}}>
                    <View style={{flexDirection:'row',justifyContent: 'flex-end',flex:1}} >
                    <Image
                        source={Images.edit}

                        style={{height: 30, width: 30 ,alignSelf:'center',marginRight:15}}
                        resizeMode="contain"></Image></View>

                </TouchableOpacity>
                

            </View>
            

            <View style={styles.closeImage}>

                <Image
                    source={Images.address}

                    style={styles.image}
                    resizeMode="contain"></Image>
                <TextRegular
                    style={styles.textstyle}
                    text={I18n.t('address')}

                />



            </View>



            <View
                style={styles.line}
            />
            <View style={styles.closeImage}>

                <Image
                    source={Images.language}

                    style={styles.image}
                    resizeMode="contain"></Image>
                <TextRegular
                    style={styles.textstyle}
                    text={I18n.t('language')}

                />


            </View>



            <View
                style={styles.line}
            />
            <View style={styles.closeImage}>

                <Image
                    source={Images.aadhar}

                    style={styles.image}
                    resizeMode="contain"></Image>
                <TextRegular
                    style={styles.textstyle}
                    text={I18n.t('Aadhar')}

                />


            </View>



            <View
                style={styles.line}
            />
            <View style={styles.closeImage}>

                <Image
                    source={Images.feedback}

                    style={styles.image}
                    resizeMode="contain"></Image>
                <TextRegular
                    style={styles.textstyle}
                    text={I18n.t('Sendfeedback')}

                />


            </View>



            <View
                style={styles.line}
            />
            <TextSemiBold text="Help" style={{ margin: 10 }} />
            <View style={styles.closeImage}>

                <Image
                    source={Images.contactus}

                    style={styles.image}
                    resizeMode="contain"></Image>
                <TextRegular
                    style={styles.textstyle}
                    text={I18n.t('Contactus')}

                />


            </View>


            <View
                style={styles.line}
            />
            <View style={styles.closeImage}>

                <Image
                    source={Images.about}

                    style={styles.image}
                    resizeMode="contain"></Image>
                <TextRegular
                    style={styles.textstyle}
                    text={I18n.t('sendquery')}

                />


            </View>

            <View
                style={styles.line}
            />
            <View style={styles.closeImage}>

                <Image
                    source={Images.about}

                    style={styles.image}
                    resizeMode="contain"></Image>
                <TextRegular
                    style={styles.textstyle}
                    text={I18n.t('about')}

                />


            </View>

            <View
                style={styles.line}
            />
            <View style={styles.closeImage}>

                <Image
                    source={Images.termcondition}

                    style={styles.image}
                    resizeMode="contain"></Image>
                <TextRegular
                    style={styles.textstyle}
                    text={I18n.t('termcondition')}

                />


            </View>

            <View
                style={styles.line}
            />
            <View style={styles.closeImage}>

                <Image
                    source={Images.privacypolicy}

                    style={styles.image}
                    resizeMode="contain"></Image>
                <TextRegular
                    style={styles.textstyle}
                    text={I18n.t('Privacy')}

                />


            </View>
            <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                <View style={{ justifyContent: 'flex-end', flex: 1 }}>

                    <TextSemiBold text={I18n.t('logout')} style={{ marginLeft: 20, }} />


                </View>
                <View style={{ justifyContent: 'flex-end', marginRight: 10 }}>

                    <Image
                        source={Images.logout}

                        style={{ height: 18, width: 18 }}
                        resizeMode="contain"></Image>

                </View>


            </View>

        </View>

   
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    closeImage: {

        backgroundColor: "#fff",
        padding: 20,

        flexDirection: 'row'



    },
    line: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 0.5,
        marginLeft: 10,
        marginRight: 10
    },
    textstyle: {

        marginLeft: 20

    },
    image: {
        height: 25,
        width: 25
    }
});

export default Profilemain;