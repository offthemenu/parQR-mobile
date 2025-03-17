import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Registration: undefined;
};

type RegistrationScreenProps = NativeStackScreenProps<RootStackParamList, "Registration">;

export default function RegistrationScreen({ navigation}: RegistrationScreenProps) {
    return(
        <View style={styles.container}>
            <Text>Registration Screen</Text>
            <Button
                title="Back Home"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});