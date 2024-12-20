import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { RootState, store } from './src/store/store';
import HomeStack from './src/navigation/stacks/HomeStack';
import AuthStack from './src/navigation/stacks/AuthStack';
import Toast from 'react-native-toast-message';


const AppNavigator = () => {
  const token = useSelector((state: RootState) => state.auth.token);
 

  return <>{token ? <HomeStack /> : <AuthStack />}</>;
};

export default function App() {
  return (
    
    <Provider store={store}>
      <NavigationContainer>      
        <AppNavigator />
      </NavigationContainer>
      <Toast/>
    </Provider>
  );
}
