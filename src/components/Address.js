import React, {useState} from 'react';
import { ScrollView, View, Text, Button, TextInput } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import order from '../libs/order.js'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ({navigation}) {
  const tailwind = useTailwind();
  const [recipient, setRecipient] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [ward, setWard] = useState('');
  const [district, setDistrict] = useState('');
  const [postal, setPostal] = useState('');
  const checkout = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const email = await AsyncStorage.getItem('userEmail');
      const username = await AsyncStorage.getItem('userUsername');
      await order.postOrder({
        userId: parseInt(userId),
        email: email,
        username: username,  
        recipient: recipient,
        province: province,
        city: city,
        district: district,
        ward: ward,
        address1: address,
        address2: null,
        zip: postal,
        paymentMethod: 'manual',
        shipment: 'any',
        shipmentCost: 30000,
        phone: phone
      });
      navigation.navigate('Payment')
    } catch (err) {
      console.log(`Err Checkout: ${err}`);
    }
  }
  
  return (
    <ScrollView>
      <View style={{flex:1}}>
        <View style={tailwind('mx-4 mt-4')}>
          <Text>Penerima :</Text>
          <TextInput
            style={tailwind('mb-8 border-b border-slate-500 rounded w-full h-12 p-2')}
            onChangeText={setRecipient}
            placeholder='Penerima' />
          <Text>Nomor Telepon :</Text>
          <TextInput
            style={tailwind('mb-8 border-b border-slate-500 rounded w-full h-12 p-2')}
            onChangeText={setPhone}
            keyboardType='number-pad'
            placeholder='Telepon' />
          <Text>Label Alamat :</Text>
          <TextInput
            style={tailwind('mb-8 border-b border-slate-500 rounded w-full h-12 p-2')}
            placeholder='Label Alamat' />
          <Text>Provinsi :</Text>
          <TextInput
            style={tailwind('mb-8 border-b border-slate-500 rounded w-full h-12 p-2')}
            onChangeText={setProvince}
            placeholder='Provinsi' />
          <Text>Kota :</Text>
          <TextInput
            style={tailwind('mb-8 border-b border-slate-500 rounded w-full h-12 p-2')}
            onChangeText={setCity}
            placeholder='Kota' />
          <Text>Kecamatan :</Text>
          <TextInput
            style={tailwind('mb-8 border-b border-slate-500 rounded w-full h-12 p-2')}
            onChangeText={setDistrict}
            placeholder='Kecamatan' />
          <Text>Kelurahan :</Text>
          <TextInput
            style={tailwind('mb-8 border-b border-slate-500 rounded w-full h-12 p-2')}
            onChangeText={setWard}
            placeholder='Kelurahan' />
          <Text>Alamat Lengkap :</Text>
          <TextInput
            style={tailwind('mb-8 border-b border-slate-500 rounded w-full h-12 p-2')}
            onChangeText={setAddress}
            placeholder='Jalan, Gang, RT, RW, Nomor Rumah, dan detail lannya' />
          <Text>Kode Pos :</Text>
          <TextInput
            style={tailwind('mb-8 border-b border-slate-500 rounded w-full h-12 p-2')}
            onChangeText={setPostal}
            keyboardType='number-pad'
            placeholder='Kode Pos' />
        </View>
        <Button title={'Checkout'} onPress={() => checkout()} />
      </View>
    </ScrollView>
  )
};