import { View , Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';


const Page = () => {

    const {id} = useLocalSearchParams<{id : string}>(); 

    // this is creating the log messages 
    console.log('🚀 ~file: [id].tsx7 ~ Page ~ id:' , id);

    return (

      <View>
        <Text>Page</Text>
        </View>
    );
}

export default Page