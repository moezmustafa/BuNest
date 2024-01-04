import { View , Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Page = () => {
    return (

      <View>
        <Text>Page</Text>

    <Link href={'./(modals)/login'}>Login</Link>
    <Link href={'./(modals)/booking'}>BOOK</Link>
    
    <Link href={'./listing/1337'}>listing details</Link>

        
        </View>
    );
}

export default Page

