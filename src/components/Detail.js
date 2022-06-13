import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, Modal, Button, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import product from '../libs/product.js'
import cart from '../libs/cart.js'
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



const apiUrl = Constants.manifest.extra.apiMainAppUrl

export default function ({route}) {
  const tailwind = useTailwind();
  const [isModal, setIsModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [productDetail, setProductDetail] = useState(null);
  const [qty, setQty] = useState('1')
  const navigation = useNavigation();

  const postCart = async (detail, qty) => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      await cart.postCart({
        userId          : parseInt(userId),
        productId 			: detail.id || 1,
        materialId 			: detail.materialId || 2,
        width 					: detail.width,
        length 					: detail.length,
        qty 						: parseInt(qty),
      })
      console.log(`product added ${detail.name} to cart`);
      navigation.navigate('Cart');
    } catch(err) {
      console.log(`Err Add Cart: ${err}`)
    }
  }

  useEffect(() => {
    product.getProductDetail(route.params.productId)
      .then(res => {
        setProductDetail(res.data);
        setIsLoading(false);
      }).catch(err => console.log(`Err: ${err}`));
      return () => console.log('data fetched');
  }, [])

  console.log(productDetail)
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
        <ActivityIndicator />
        <Text>Data being load ...</Text>
      </View>
    )
  } else {
    return (
      <View style={{flex:1}}>
        <Image
          source={{ uri: `${apiUrl}/uploads/${productDetail.mainImg}` }}
          style={{height: 250, resizeMode: 'contain', margin: 24}} />
        <View style={tailwind('m-4')}>
          <Text style={tailwind('text-2xl font-bold')}>{productDetail.name}</Text>
          <Text>{productDetail.description}</Text>
          <Text>Ukuran : {productDetail.bestLength}mm x {productDetail.bestWidth}mm</Text>
        </View>
        <View style={tailwind('absolute bottom-0 h-12 w-full flex flex-row border-t-2 border-slate-300')}>
          <Pressable style={tailwind('basis-2/12 bg-amber-200 m-1 rounded-xl')}>
            <Text style={tailwind('m-auto')}>C</Text>
          </Pressable>
          <Pressable style={tailwind('grow bg-amber-600 m-1 rounded-xl')} onPress={() => setIsModal(true)}>
            <Text style={tailwind('m-auto')}>Pesan sekarang</Text>
          </Pressable>
        </View>
        <Modal
          visible={isModal}
          animationType='fade'
          transparent={true}
          style={[{flex:1},tailwind('bg-amber-600')]}>
          <View style={css.modalOverlay}>
            <View style={css.modal}>
              <Text style={{position:'absolute', right:10, top:10}} onPress={() => setIsModal(false)}>X</Text>
              <TextInput
                style={tailwind('mb-8 border border-slate-500 rounded w-24 h-12 p-2')}
                keyboardType='number-pad'
                value={qty}
                onChangeText={setQty}
                placeholder='Quantity' />
              <Button onPress={() => postCart(productDetail, qty)} title={'Tambah ke keranjang'} />
            </View>
          </View>
        </Modal>
      </View>
    )
  }
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