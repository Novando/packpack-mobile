import React from 'react';
import { ScrollView, View, Text, Modal, Button, Pressable, StyleSheet } from 'react-native';
import { useTailwind } from 'tailwind-rn';


export default function () {
  const tailwind = useTailwind();
  
  return (
    <View style={{flex:1}}>
      <View style={tailwind('m-4')}>
        <Text>Total: Rp20.000.000</Text>
        <Text>Pilih metode Pembayaran</Text>
        <Pressable>
          <Text>Manual Transfer</Text>
        </Pressable>
      </View>
      <View style={tailwind('absolute bottom-0 w-full')}>
        <Button title={'Konfirmasi Pembayaran'} />
      </View>
    </View>
  )
};