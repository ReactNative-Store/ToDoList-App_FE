import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../../screen/Profile/ProfileScreen';
import ChangePasswordScreen from '../../screen/Profile/ChangePassword/ChangePasswordScreen';
import ProfileDetailScreen from '../../screen/Profile/ProfileDetail/ProfileDetailScreen';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Profile Stack" component={ProfileScreen} />
      <Stack.Screen name = "ProfileDetail Stack" component={ProfileDetailScreen} />
      <Stack.Screen name = "ChangePassword Stack" component={ChangePasswordScreen} />
    </Stack.Navigator>
  )
}

export default ProfileStack