import React, {Component} from 'react';
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'native-base';
import { connect } from 'react-redux';
import { logout } from '../../../../../actions';
import { bindActionCreators } from 'redux';

class DrawerFooter extends Component {
    render() {

        if(!this.props.user){
            this.props.navigation.navigate('Login')
        }

        return(
            <View style={{
                backgroundColor: '#e5e5e5',
                display: 'flex',
                flex: 1,
                width: '100%',
                flexDirection: 'column',
                borderStartColor: '#4c4c4c',
                borderStartWidth: 5,
            }} >
        
        
            {/* <Button transparent style={styles.buttonStyle} onPress={()=> this.props.navigation.navigate('Login')}>
                <Icon name='sign-in' size={25} style={{marginRight: 30}} color='#1979e8'/>
                <Text style={{fontWeight: 'bold'}} >Log In</Text>
            </Button>

            <Button transparent style={styles.buttonStyle} onPress={()=> this.props.navigation.navigate('SignUp')}>
                <Icon name='sign-in' size={25} style={{marginRight: 30}} color='#003777'/>
                <Text style={{fontWeight: 'bold'}} >Sign Up</Text>
            </Button> */}
        
            <Button
                transparent
                style={styles.buttonStyle}
                onPress={()=> this.props.logout()}
            >
                <Icon name='sign-out' size={25} style={{marginRight: 30}} color='#ce1b00' />
                <Text style={{fontWeight: 'bold'}} >Log Out</Text>
            </Button>
        
            <Button transparent style={styles.buttonStyle} onPress={()=> this.props.navigation.navigate('Settings')} >
                <Icon name='cog' size={25} style={{marginRight: 30}} color='#1c1c1c' />
                <Text style={{fontWeight: 'bold'}} >Settings</Text>
            </Button>
        
            <Button transparent style={styles.buttonStyle} onPress={()=> this.props.navigation.navigate('Help')} >
                <Icon name='question-circle' size={25} style={{marginRight: 30}} color='#2b3e5b'/>
                <Text style={{fontWeight: 'bold'}} >Help</Text>
            </Button>
        
        
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: '100%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 7,
        paddingLeft: 20,
    }
});

const mapStatetoProps = ({ auth }) => {
    const { user } = auth;
    return{ user };
};

const matchDispatchToProps = ( dispatch ) => {
    return bindActionCreators({
        logout
    }, dispatch);
}

export default connect(mapStatetoProps, matchDispatchToProps)(DrawerFooter);
