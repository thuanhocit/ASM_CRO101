import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/CheckBox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignUp = ({ navigation }) => {
    const [checked, setChecked] = useState(false);

    const onSignIn = () => {
        navigation.navigate("Signin"); // Ensure "SignIn" exists in your navigation stack
    };

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up" />
            <Input label="Name" placeholder="Enter your name" />
            <Input label="Email" placeholder="Example: thuanhocit@example.com" />
            <Input isPassword label="Password" placeholder="******" />

            <View style={styles.checkRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
            </View>

            <Button style={styles.button} title="Sign Up" />

            <Separator text="Or Sign Up with" />
            <GoogleLogin />

            <Text style={styles.footerText}>
                Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}> Sign In</Text>
            </Text>
        </View>
    );
};

export default SignUp;
