import { Image, StyleSheet, View, Text } from 'react-native'
import { Button } from '../components/Button'
import { TextInput } from '../components/TextInput'
import { push } from '../App'
import { useState } from 'react'
import { useLoginMutation } from '../api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'

interface LoginProps {
  setIsAuthorized: (isAuthorized: boolean) => void
}

export default function Login({ setIsAuthorized }: LoginProps) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const { mutate } = useLoginMutation({ login, password })

  const _storeData = async (token: string) => {
    try {
      await AsyncStorage.setItem('token', token)
    } catch (error) {}
  }

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      if (value !== null) {
        setIsAuthorized(true)
      }
    } catch (error) {}
  }

  const handleLogin = async () => {
    await AsyncStorage.removeItem('token')
    await mutate(
      (x) =>
        _storeData(
          JSON.stringify(x).substring(14, JSON.stringify(x).length - 2)
        ),
      (y) => {
        Toast.show({
          type: 'error',
          text1: 'Coś poszło nie tak :(',
        })
      }
    )
    await _retrieveData()
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
      <View style={styles.loginWrapper}>
        <Text style={styles.text}>Nazwa użytkownika</Text>
        <TextInput isPassword={false} onChange={(e) => setLogin(e)} />
        <Text style={styles.text}>Hasło</Text>
        <TextInput isPassword={true} onChange={(e) => setPassword(e)} />
        <Text
          style={styles.register}
          onPress={() => {
            push('Register')
          }}
        >
          Stwórz konto
        </Text>
      </View>
      <Button
        externalStyles={styles.button}
        btnTitle="Zaloguj"
        onPress={handleLogin}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 50,
  },
  loginWrapper: {
    marginTop: 90,
  },
  button: {
    marginTop: 60,
  },
  register: {
    color: '#d66318',
    textAlign: 'right',
  },
})
