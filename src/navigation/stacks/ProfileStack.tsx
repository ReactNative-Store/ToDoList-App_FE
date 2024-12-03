import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../../screen/Profile/ProfileScreen';
import ProfileDetail from '../../screen/Profile/ProfileDetail/ProfileDetail';
import ChangePassword from '../../screen/Profile/ChangePassword/ChangePassword';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Profile Stack" component={ProfileScreen} />
      <Stack.Screen name = "Profile Detail Stack" component={ProfileDetail} />
      <Stack.Screen name = "Change Password Stack" component={ChangePassword} />
    </Stack.Navigator>
  )
}

export default ProfileStack