import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    Registration: undefined;
}

type HomescreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation}: HomescreenProps) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Go to Registration"
                onPress={() => navigation.navigate('Registration')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});