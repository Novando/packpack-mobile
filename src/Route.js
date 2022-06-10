import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@packpack/components/Home'
import Account from '@packpack/components/Account'
import Detail from '@packpack/components/Detail'
// import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainNav = () => {
	return (
		<Tab.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
			<Tab.Screen name='Acount' component={Account} />
			<Tab.Screen name='Home' component={Home} />
			<Tab.Screen name='Setting' component={Detail} />
		</Tab.Navigator>
	)
}

export default function Route () {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Home' component={MainNav} />
				<Stack.Screen name='Detail' component={Detail} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}