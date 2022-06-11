import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@packpack/components/Home'
import Cart from '@packpack/components/Cart'
import Detail from '@packpack/components/Detail'
import Login from '@packpack/components/Login'
import Address from '@packpack/components/Address'
import Payment from '@packpack/components/ConfirmPayment'
// import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainNav = () => {
	return (
		<Tab.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
			<Tab.Screen name='Cart' component={Cart} />
			<Tab.Screen name='Home' component={Home} />
			<Tab.Screen name='Setting' component={Login} />
		</Tab.Navigator>
	)
}

export default function () {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{title:'PackPack'}}>
				<Stack.Screen name='Home' component={MainNav} />
				<Stack.Screen name='Detail' component={Detail} />
				<Stack.Screen name='Address' component={Address} />
				<Stack.Screen name='Payment' component={Payment} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}