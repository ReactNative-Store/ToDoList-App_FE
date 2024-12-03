import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'  
import React from 'react'
import HomeStack from './stacks/HomeStack';
import ProfileStack from './stacks/ProfileStack';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  )
}

export default TabNavigation

