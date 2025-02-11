import React from "react";
import { Text, ScrollView } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader"; 
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignIn = ({ navigation }) => {
    const onSignUp = () => {
        navigation.navigate("Signup"); 
    };

    const onBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign In" /> 

            <Input label="Email" placeholder="example: thuanhocit@example.com" />
            <Input isPassword label="Password" placeholder="******" />

            <Button style={styles.button} title="Sign In" />

            <Separator text="Or Sign In with" />
            <GoogleLogin />

            <Text style={styles.footerText}>
                Don't have an account?
                <Text onPress={onSignUp} style={styles.footerLink}> Sign Up</Text>
            </Text>
        </ScrollView>
    );
};

export default React.memo(SignIn);
