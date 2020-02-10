import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AboutScreen = ({
    params,
}) => (
    <View style={styles.container}>
        <Text>AboutScreen</Text>
    </View>
);

export default AboutScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
