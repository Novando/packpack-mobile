import React, { useState } from 'react';
import { View, Text, Image, Pressable, Modal, Button, TextInput, StyleSheet } from 'react-native';
import { useTailwind } from 'tailwind-rn';


export default function () {
  const tailwind = useTailwind();
  const [isModal, setIsModal] = useState(false);

  return (
    <View style={{flex:1}}>
      <Image
        source={{ uri: 'https://via.placeholder.com/250'}}
        style={{height: 250, resizeMode: 'contain', margin: 24}} />
      <View style={tailwind('m-4')}>
        <Text style={tailwind('text-2xl font-bold')}>Ini Produk</Text>
        <Text>Loremlahlafjikrhpgvniscfma;ow,ck[oetmj]ovihgn dmglij</Text>
      </View>
      <View style={tailwind('absolute bottom-0 h-12 w-full flex flex-row border-t-2 border-slate-300')}>
        <Pressable style={tailwind('basis-2/12 bg-amber-200 m-1 rounded-xl')}>
          <Text style={tailwind('m-auto')}>C</Text>
        </Pressable>
        <Pressable style={tailwind('grow bg-amber-600 m-1 rounded-xl')} onPress={() => setIsModal(true)}>
          <Text style={tailwind('m-auto')}>Rp 1000</Text>
        </Pressable>
      </View>
      <Modal
        visible={isModal}
        animationType='fade'
        transparent={true}
        style={[{flex:1},tailwind('bg-amber-600')]}>
        <View style={css.modalOverlay}>
          <View style={css.modal}>
            <TextInput
              style={tailwind('mb-8 border border-slate-500 rounded w-24 h-12 p-2')}
              keyboardType='number-pad'
              placeholder='Quantity' />
            <Button onPress={() => setIsModal(false)} title={'Add to Cart'} />
          </View>
        </View>
      </Modal>
    </View>
  )
};

const css = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#47443d80'
  },
  modal: {
    height: 300,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f0f0f0',
    borderRadius: 15
  }
});