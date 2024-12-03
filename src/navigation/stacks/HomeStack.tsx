import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../screen/Home/HomeScreen';
import TaskScreen from '../../screen/Home/Task/TaskScreen';
import TaskDetailScreen from '../../screen/Home/Task/TaskDetailScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Home Stack" component={HomeScreen} />
      <Stack.Screen name = "Task Stack" component={TaskScreen} />
      <Stack.Screen name = "Task Deltail Stack" component={TaskDetailScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack;