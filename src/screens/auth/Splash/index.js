import React from "react";
import { Text, Image, View, Pressable } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";

const Splash = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode="contain"
                style={styles.img}
                source={require('../../../assets/splash.png')}
            />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll Find</Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>

            {/* Kiểm tra sự kiện onPress của Button */}
            <Button onPress={() => navigation.navigate("Signup")} title="Sign Up" />

            {/* Kiểm tra sự kiện onPress của Pressable */}
            <Pressable onPress={() => navigation.navigate("Signin")}>
                <Text style={styles.footerText}>Sign in</Text>
            </Pressable>
        </View>
    );
};

export default Splash;
