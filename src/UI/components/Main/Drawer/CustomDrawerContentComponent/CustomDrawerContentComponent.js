import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

import DrawerHeader from '../DrawerHeader/DrawerHeader';
import DrawerFooter from '../DrawerFooter/DrawerFooter';

class customDrawerContentComponent extends React.Component {
    render() {
        return(
            <ScrollView>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                <DrawerHeader {...this.props}/>
                <View style={{ borderStartColor: '#f2213a', borderStartWidth: 5}}>
                    <DrawerItems {...this.props}/>
                </View>
                <DrawerFooter {...this.props}/>
            </SafeAreaView>
        </ScrollView>
      );
    }
}

const styles = {
    container: {
    flex: 1,
    }
}

const mapStatetoProps = (state) => {
    const { user, profile } = state.auth;
    return{ user, profile };
};

export default connect(mapStatetoProps, {} )(customDrawerContentComponent);