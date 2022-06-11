import React from 'react'
import { ScrollView, View, Button, Image, Text, ImageBackground, Pressable } from 'react-native'
import {useTailwind} from 'tailwind-rn';

export default function ({ navigation }) {
  const tailwind = useTailwind();

  return (
    <ScrollView style={{flex:1}}>
      <ImageBackground
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={tailwind('h-64 mb-4')}>
        <Text style={tailwind('m-auto px-4 py-2 bg-amber-600 rounded-md text-slate-300 font-bold uppercase')}>Click Me</Text>
      </ImageBackground>
      <Button title="Kategori" />
      <ScrollView
        horizontal={true}
        style={tailwind('flex flex-row mb-8')}
        showsHorizontalScrollIndicator={false} >
        <Pressable
          style={tailwind('flex-none w-40')}
          onPress={() => navigation.navigate('Detail')}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150'}}
            style={{height: 150, resizeMode: 'contain', margin: 10}} />
          <Text style={tailwind('text-center')}>Rp 1.000</Text>
        </Pressable>
        <Pressable
          style={tailwind('flex-none w-40')}
          onPress={() => navigation.navigate('Detail')}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150'}}
            style={{height: 150, resizeMode: 'contain', margin: 10}} />
          <Text style={tailwind('text-center')}>Rp 1.000</Text>
        </Pressable>
      </ScrollView>
      <Button title="Kategori" />
      <View>
        <Image
          source={{ uri: 'https://via.placeholder.com/150'}}
          style={{height: 150, resizeMode: 'contain', margin: 10}} />
        <Text>Rp 1.000</Text>
      </View>
    </ScrollView>
  )
}
