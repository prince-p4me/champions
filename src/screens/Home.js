import React, { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from "react-native";
import Header from "../components/Header";
import Colors from "../utility/Color";
import styles from "../utility/Style";
import { getVideos, setLoading } from "../redux/action";
import { useSelector, useDispatch } from 'react-redux';
import Loader from "../components/Loader";
import * as Navigation from "../navigation/navigation";

const HomeScreen = () => {
    const list = useSelector(state => state.videos.list);
    const dispatch = useDispatch();

    const childRef = useRef();
    const [search, setSearch] = useState("");
    const [speechModal, setSpeechModal] = useState(false);

    return (
        <View style={styles.container}>
            <Header title={"Home"} />
            <View style={[styles.center, { justifyContent: "center" }]}>
                <TouchableOpacity style={{
                    backgroundColor: Colors.theme,
                    padding: 10
                }} onPress={() => dispatch(getVideos())}>
                    <Text style={{ color: "white" }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HomeScreen