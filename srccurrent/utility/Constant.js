import { Dimensions } from 'react-native';
const baseUrl = "http://drive13.in/champ/"
export default Constants = {
    API_URL: baseUrl + "api/",
    IMAGE_URL: baseUrl + "images/",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
}