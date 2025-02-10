import React, { useState } from "react";
import { Text, Image, View, Pressable } from "react-native";
import { styles } from "./styles";
import AutHeader from "../../../components/AuthHaeder";
import Input from "../../../components/Input";
import Checkbox from "../../../components/CheckBox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignUp = () => {
    const [checked, setChecked] = useState(false);

    const onSignIn = () => {
        console.log('Test Sign In');
    }

    return (
        <View style={styles.container}>
            <AutHeader title="Sign Up" />
            <Input label="Name" placeholder="Enter your name"/>
            <Input label="Email" placeholder="Example: thuanhocit@example.com"/>
            <Input isPassword label="Password" placeholder="******"/>
            <View style={styles.checkRow}>
                <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
            </View>
            <Button style={styles.button} title="Sign Up"></Button>
            <Separator text="Or Sign Up with"></Separator>
            <GoogleLogin></GoogleLogin>

            <Text style={styles.footerText}>Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}>Sign In</Text>
            </Text>
        </View>
    );
};

export default SignUp;