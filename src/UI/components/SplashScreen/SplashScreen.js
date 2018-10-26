import React, {Component} from 'react';
import { View } from "react-native";
import Image from 'react-native-remote-svg';

class splashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 3000);
    }

    render() {
        return(
            <View style={{
                display: 'flex',
                flex: 1,
                backgroundColor: '#d1d1d1',
                alignItems: 'center',
                justifyContent: 'center'
            }} >
                <Image source={require('../../../images/index3.svg')} />
            </View>
            );
    }
}

export default splashScreen;