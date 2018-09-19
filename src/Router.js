import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginForm from './UI/components/Authentication/LoginForm/LoginForm';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root"  hideNavBar={true}>
                <Scene
                    initial
                    key='login'
                    component = {LoginForm}
                    title='Please Login'
                />
            </Scene>
        </Router>
    );
}

export default RouterComponent;
