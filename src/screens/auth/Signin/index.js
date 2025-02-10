import React, { useState } from "react";
import { Text, Image, View, Pressable, ScrollView } from "react-native";
import { styles } from "./styles";
import AutHeader from "../../../components/AuthHaeder";
import Input from "../../../components/Input";
import Checkbox from "../../../components/CheckBox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignIn = ({navigation}) => {

    const onSignIn = () => {
        navigation.navigate('Signin')
    }

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <ScrollView style={styles.container}>
            <AutHeader onBackPress={onBack} title="Sign In" />

            <Input label="Email" placeholder="example: thuanhocit@example.com" />
            <Input isPassword label="Password" placeholder="******" />

            <Button style={styles.button} title={"Sign In"} />

            <Separator text="Or Sign In with" />
            <GoogleLogin />

            <Text style={styles.footerText}>Don't have an account?
                <Text onPress={onSignIn} style={styles.footerLink}>{' '}</Text>
            </Text>
        </ScrollView>
    );
};

export default React.memo(SignIn);