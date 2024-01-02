import { View , Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Page = () => {
    return (

      <View>
        <Text>Page</Text>

        <Link href={"./(modals)/booking"}>
            Booking
        </Link>
        
        <Link href={"./(modals)/login"}>
            Login
        </Link>

        
        </View>
    );
}

export default Page

