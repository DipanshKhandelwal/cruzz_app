import React, {Component} from 'react';
import { View, Text, Button } from "react-native";

class signupForm extends Component {

    render() {
        return(
            <View>
                <Text>
                    Sign Up
                </Text>
                <Button
                    title="Next"
                    style={{
                        color: 'blue',
                    }}
                    onPress={() => this.props.navigation.navigate('Drawer')}
                    // onChangeText={(text) => this.setState({text})}
                    // value={this.state.text}
                />
            </View>
            );
    }
}

export default signupForm;