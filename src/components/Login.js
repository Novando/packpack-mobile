import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import user from '../libs/user.js';
import { useTailwind } from 'tailwind-rn';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Screen = ({propIsLogin, propSetIsLogin, afterLogin}) => {
  const tailwind = useTailwind();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const register = async (username, email, password, confirm) => {
    setIsLoading(true);
    try {
      await user.postRegister({
        email: email,
        username: username,
        password: password,
        confirm: confirm
      })
    } catch(err) {
      console.log(`Err Register: ${err}`)
    }
    login(username, password)
  };
  const login = async (username, password) => {
    setIsLoading(true);
    try {
      const userData = await user.postLogin({
        credential: username,
        password: password
      });
      const decoded = jwt_decode(userData.data.token);
      await AsyncStorage.setItem('userId', JSON.stringify(decoded.getId));
      await AsyncStorage.setItem('userEmail', decoded.getEmail);
      await AsyncStorage.setItem('userUsername', decoded.getUsername);
      await AsyncStorage.setItem('userRole', decoded.getRole);
    } catch (err) {
      console.log(`Err Login: ${err}`)
    }
    setIsLoading(false);
    afterLogin();
  };
  const changeScreen = (val) => {
    propSetIsLogin(val);
    setEmail('');
    setUsername('');
    setPassword('');
    setConfirm('');
  }

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
        <Text>Processing...</Text>
      </View>
    )
  };
  if (propIsLogin) {
    return (
      <View>
        <TextInput
          style={tailwind('mb-8 border border-slate-500 rounded w-40 h-12 p-2')}
          value={username}
          onChangeText={setUsername}
          placeholder='Email/Username' />
        <TextInput
          style={tailwind('mb-8 border border-slate-500 rounded w-40 h-12 p-2')}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder='Password' />
        <Text style={tailwind('mb-4')}>
          Belum punya akun? 
          <Text style={{color:'blue'}} onPress={() => changeScreen(false)}>Daftar dulu</Text>
        </Text>
        <Button title={'Login'} onPress={() => login(username, password)} />
      </View>
    )
  } else {
    return (
      <View>
        <TextInput
          style={tailwind('mb-8 border border-slate-500 rounded w-40 h-12 p-2')}
          value={email}
          onChangeText={setEmail}
          placeholder='Email' />
        <TextInput
          style={tailwind('mb-8 border border-slate-500 rounded w-40 h-12 p-2')}
          value={username}
          onChangeText={setUsername}
          placeholder='Username' />
        <TextInput
          style={tailwind('mb-8 border border-slate-500 rounded w-40 h-12 p-2')}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder='Password' />
        <TextInput
          style={tailwind('mb-8 border border-slate-500 rounded w-40 h-12 p-2')}
          value={confirm}
          onChangeText={setConfirm}
          secureTextEntry={true}
          placeholder='Confirm Password' />
        <Text style={tailwind('mb-4')}>
          Sudah punya akun akun? 
          <Text
            style={{color:'blue'}}
            onPress={() => changeScreen(true)}>
            Masuk di sini
          </Text>
        </Text>
        <Button title={'Register'} onPress={() => register(username, email, password, confirm)} />
      </View>
    )
  }
}

export default function () {
  const [isLogin, setIsLogin] = useState(true)
  const [userUsername, setUserUsername] = useState(null)
  const getUserUsername = async () => {
    try {
      setUserUsername(await AsyncStorage.getItem('userUsername'))
    } catch (err) {
      console.log(`Err Login: ${err}`)
    }
  }
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userId');
      await AsyncStorage.removeItem('userEmail');
      await AsyncStorage.removeItem('userUsername');
      await AsyncStorage.removeItem('userRole');
      setUserUsername(null);
    } catch (err) {
      console.log(`Err Logout: ${err}`)
    }
  }

  useEffect(() => {
    getUserUsername();
  }, []);
  console.log(`Username: ${userUsername}`)
  return (
    <View style={css.overlay}>
      {!userUsername ? <Screen propIsLogin={isLogin} propSetIsLogin={setIsLogin} afterLogin={getUserUsername} /> : 
        <View>
          <Text>Hello {userUsername}</Text>
          <Button title='Logout' onPress={() => logout()} />
        </View>
      }
      
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