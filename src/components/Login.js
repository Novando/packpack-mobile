import React, { useState } from 'react';
import { View, Text, Modal, Button, TextInput, StyleSheet } from 'react-native';
import user from '../libs/user.js';
import { useTailwind } from 'tailwind-rn';




const Screen = ({propIsLogin, propSetIsLogin}) => {
  const tailwind = useTailwind();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = async (username, password) => {
    await user.postLogin({
      credential: username,
      password: password
    })
  }

  if (propIsLogin) {
    return (
      <View>
        <TextInput
          style={tailwind('mb-8 border border-slate-500 rounded w-40 h-12 p-2')}
          keyboardType='number-pad'
          value={username}
          onChangeText={setUsername}
          placeholder='Email/Username' />
        <TextInput
          style={tailwind('mb-8 border border-slate-500 rounded w-40 h-12 p-2')}
          keyboardType='number-pad'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder='Password' />
        <Text style={tailwind('mb-4')}>
          Belum punya akun? 
          <Text style={{color:'blue'}} onPress={() => propSetIsLogin(false)}>Daftar dulu</Text>
        </Text>
        <Button title={'Login'} onPress={() => {login(username, password)}} />
      </View>
    )
  } else {
    return (
      <View>
        <TextInput
          style={tailwind('mb-8 border border-slate-500 rounded w-40 h-12 p-2')}
          keyboardType='number-pad'
          placeholder='Email' />
        <TextInput
          style={tailwind('mb-8 border border-slate-500 rounded w-40 h-12 p-2')}
          keyboardType='number-pad'
          placeholder='Username' />
        <TextInput
          style={tailwind('mb-8 border border-slate-500 rounded w-40 h-12 p-2')}
          keyboardType='number-pad'
          placeholder='Password' />
        <Text style={tailwind('mb-4')}>
          Sudah punya akun akun? 
          <Text
            style={{color:'blue'}}
            onPress={() => propSetIsLogin(true)}>
            Masuk di sini
          </Text>
        </Text>
        <Button title={'Register'} />
      </View>
    )
  }
}

export default function () {
  const [isLogin, setIsLogin] = useState(true)

  
  return (
    <View style={css.overlay}>
      <Screen propIsLogin={isLogin} propSetIsLogin={setIsLogin} />
    </View>
  )
};


const css = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});