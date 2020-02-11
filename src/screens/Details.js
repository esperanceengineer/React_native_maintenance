import React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function DetailsScreen({route}) {
    const {item} = route.params
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.imageStyle}
                source={{uri:item.image}}
            />
            <View>
                <Text style={styles.titleStyle} >{item.type}</Text>
                <Text style={styles.defaultText}>{item.jour}</Text>
                <Text style={styles.details} >{item.details}</Text>
            </View>
        </SafeAreaView>
    )
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imageStyle: {
        height:169,
    },
    titleStyle: {
        fontWeight:'bold',
        fontSize: 25,
        marginTop: 5,
        color:'#000000'
    },
    details: {
        fontStyle:'italic',
        color:'#666666',
        flexWrap: 'wrap',
        marginLeft:10
    },
    defaultText:{
        marginLeft:5,
        textAlign:'left'
    },
})
