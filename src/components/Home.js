import React, { useState, useEffect } from 'react'
import { ScrollView, View, Button, Image, Text, ImageBackground, Pressable, FlatList } from 'react-native'
import {useTailwind} from 'tailwind-rn';
import product from '../libs/product.js'
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';


const apiUrl = Constants.manifest.extra.apiMainAppUrl

const Product = ({item}) => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  return (
    <Pressable
      style={tailwind('flex-none w-40')}
      onPress={() => navigation.navigate('Detail', { productId: item.id })}>
      <Image
        source={{ uri: `${apiUrl}/uploads/${item.mainImg}`}}
        style={{height: 150, resizeMode: 'contain', margin: 10}} />
      <Text style={tailwind('text-center')}>{item.name}</Text>
    </Pressable>
  )
}

export default function ({ navigation }) {
  const tailwind = useTailwind();
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState();

  useEffect (() => {
    console.log('useState init')
    setIsLoading(true)
    product.getProducts().then(res => {
      setProductData(res.data);
      setIsLoading(false);
    }).catch(err => console.log(`Call Error: ${err}`));
    return () => console.log('data fetched')
  }, [])
  console.log(isLoading);
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
        {console.log('parent')}  
        {console.log(productData)}
        {/* <Product item='test' /> */}
        {isLoading ? <Text>Loading data...</Text> :
          productData.map(item => {
            return <Product item={item} key={item.id} />
          })
        }
      </ScrollView>
    </ScrollView>
  )
}
