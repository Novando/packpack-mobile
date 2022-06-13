import React, {useState, useEffect} from 'react'
import { ScrollView, View, Button, Image, Text, Pressable, TextInput, ActivityIndicator } from 'react-native'
import {useTailwind} from 'tailwind-rn';
import cart from '../libs/cart.js'
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';


const apiUrl = Constants.manifest.extra.apiMainAppUrl

const Carts = ({item}) => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('bg-orange-50 flex flex-row justify-between m-2 p-2')}>
      <Image
        source={{ uri: `${apiUrl}/uploads/${item.mainImg}`}}
        style={[tailwind('mx-1'),{height: 75, width: 75}]} />
      <View style={tailwind('mx-1')}>
        <Text>Rp {item.subPrice}</Text>
        <Text>{item.name}-{item.variant}</Text>
      </View>
      <View style={tailwind('mx-1')}>
        <TextInput
          value={item.qty.toString()}
          editable={false}
          style={tailwind('border border-slate-500 rounded w-20 h-8 p-2')} />
        <Text>D</Text>
      </View>
    </View>
  )
}

export default function ({ navigation }) {
  const tailwind = useTailwind();
  const [isLoading, setIsLoading] = useState(true);
  const [carts, setCarts] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const getCarts = async () =>{
    try{
      setTotalPrice(0)
      const userId = await AsyncStorage.getItem('userId');
      console.log(`userId: ${userId}`);
      setCarts(await cart.getCartByUser({userId: parseInt(userId)}));
      console.log(carts);
      setIsLoading(false);
    } catch (err) {
      console.log(`Err get cart: ${err}`);
    }
  }

  useEffect(() => {
    getCarts();
    carts.data.forEach(item => {
      setTotalPrice(totalPrice + item.subPrice)
    })
  }, [])

  return (
    <View style={{flex:1}}>
      <ScrollView>
        {isLoading ? <ActivityIndicator /> : carts.data.map(item => {
          return <Carts item={item} key={item.id} />
        })}
      </ScrollView>
      <View style={tailwind('absolute bottom-0 h-12 w-full')}>
        <Pressable
          style={tailwind('grow bg-amber-600')}
          onPress={() => navigation.navigate('Address')}>
            {isLoading ?
              <ActivityIndicator size="small" style={tailwind('m-auto')} /> :
              <Text style={tailwind('m-auto')}>Rp {totalPrice}</Text>
            }
        </Pressable>
      </View>
    </View>
  )
}
