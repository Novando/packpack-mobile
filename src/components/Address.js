import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ScrollView, View, Text, Modal, Button, TextInput, StyleSheet } from 'react-native';
import { useTailwind } from 'tailwind-rn';


export default function ({navigation}) {
  const tailwind = useTailwind();
  
  return (
    <ScrollView>
      <View style={{flex:1}}>
        <View style={tailwind('mx-4 mt-4')}>
          <Text>Penerima :</Text>
          <TextInput
            style={tailwind('mb-8 border-b border-slate-500 rounded w-full h-12 p-2')}
            placeholder='Penerima' />
          <Text>Nomor Telepon :</Text>
          <TextInput
            style={tailwind('mb-8 border-b border-slate-500 rounded w-full h-12 p-2')}
            keyboardType='number-pad'
            placeholder='Telepon' />
          <Text>Label Alamat :</Text>
          <TextInput
            style={tailwind('mb-8 border-b border-slate-500 rounded w-full h-12 p-2')}
            placeholder='Label Alamat' />
          <Text>Kota :</Text>
          <TextInput
            style={tailwind('mb-8 border-b border-slate-500 rounded w-full h-12 p-2')}
            placeholder='Kota' />
          <Text>Kecamatan :</Text>
          <TextInput
            style={tailwind('mb-8 border-b border-slate-500 rounded w-full h-12 p-2')}
            placeholder='Kecamatan' />
          <Text>Kelurahan :</Text>
          <TextInput
            style={tailwind('mb-8 border-b border-slate-500 rounded w-full h-12 p-2')}
            placeholder='Kelurahan' />
          <Text>Alamat Lengkap :</Text>
          <TextInput
            style={tailwind('mb-8 border-b border-slate-500 rounded w-full h-12 p-2')}
            placeholder='Jalan, Gang, RT, RW, Nomor Rumah, dan detail lannya' />
        </View>
        <Button title={'Simpan'} onPress={() => navigation.navigate('Payment')} />
      </View>
    </ScrollView>
  )
};