import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../screen/Home/HomeScreen';

import TaskDetailScreen from '../../screen/Home/Task/TaskDetailScreen';
import TodoListScreen from '../../screen/Home/TodoList/TodoListScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name = "Home Stack" component={HomeScreen} />
      <Stack.Screen name = "Task Stack" component={TodoListScreen} />
      <Stack.Screen name = "Task Deltail Stack" component={TaskDetailScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack;