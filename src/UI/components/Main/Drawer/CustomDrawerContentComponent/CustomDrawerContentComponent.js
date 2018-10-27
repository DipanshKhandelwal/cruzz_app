import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { DrawerItems, SafeAreaView } from 'react-navigation';

import DrawerHeader from '../DrawerHeader/DrawerHeader';
import DrawerFooter from '../DrawerFooter/DrawerFooter';

const customDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerHeader />
            <View style={{ borderStartColor: '#f2213a', borderStartWidth: 5}}>
                <DrawerItems {...props}/>
            </View>
            <DrawerFooter {...props}/>
        </SafeAreaView>
    </ScrollView>
  );
  
    const styles = StyleSheet.create({
        container: {
        flex: 1,
    },
});

export default customDrawerContentComponent;
