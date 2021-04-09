import * as React from 'react';
//import NavigationService from './navigation/NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect, useSelector} from 'react-redux';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createStackNavigator();

function Routes(props) {
  // const userData = useSelector(state => state.auth.userData);
  const userData = props.userData;
  console.log(userData, '@@@rooute page,');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userData.accessToken ? AuthStack(Stack) : MainStack(Stack)}
        {/* {MainStack(Stack)} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const mapStateToProps = state => {
  return {
    userData: state.auth.userData,
  };
};

export default connect(mapStateToProps)(Routes);
