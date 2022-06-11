import React from 'react'
import { ScrollView, View, Button, Image, Text, ImageBackground, Pressable, TextInput } from 'react-native'
import {useTailwind} from 'tailwind-rn';

export default function ({ navigation }) {
  const tailwind = useTailwind();

  return (
    <View style={{flex:1}}>
      <ScrollView>
        <View style={tailwind('bg-orange-50 flex flex-row justify-between m-2 p-2')}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100'}}
            style={[tailwind('mx-1'),{height: 75, width: 75}]} />
          <View style={tailwind('mx-1')}>
            <Text>Rp 1.000</Text>
            <Text>Ini Produk</Text>
          </View>
          <View style={tailwind('mx-1')}>
            <TextInput
              style={tailwind('border border-slate-500 rounded w-20 h-8 p-2')}
              keyboardType='number-pad' />
            <Text>D</Text>
          </View>
        </View>
        <View style={tailwind('bg-orange-50 flex flex-row justify-between m-2 p-2')}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100'}}
            style={[tailwind('mx-1'),{height: 75, width: 75}]} />
          <View style={tailwind('mx-1')}>
            <Text>Rp 1.000</Text>
            <Text>Ini Produk</Text>
          </View>
          <View style={tailwind('mx-1')}>
            <TextInput
              style={tailwind('border border-slate-500 rounded w-20 h-8 p-2')}
              keyboardType='number-pad' />
            <Text>D</Text>
          </View>
        </View>
      </ScrollView>
      <View style={tailwind('absolute bottom-0 h-12 w-full')}>
        <Pressable
          style={tailwind('grow bg-amber-600')}
          onPress={() => navigation.navigate('Address')}>
          <Text style={tailwind('m-auto')}>Rp 1000</Text>
        </Pressable>
      </View>
    </View>
  )
}
