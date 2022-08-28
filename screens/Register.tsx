import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native'
import { Button } from '../components/Button'
import { TextInput } from '../components/TextInput'
import { useState } from 'react'
import { push } from '../App'
import Toast from 'react-native-toast-message'
import { useRegisterMutation } from '../api'
import Login from './Login'

export default function Register() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [repPassword, setRepPassword] = useState('')
  const { mutate } = useRegisterMutation({
    login,
    password,
  })

  const handleRegister = async () => {
    await mutate(
      (x) => {
        if (x.success === true) {
          Toast.show({
            type: 'success',
            text1: 'Konto pomyślnie zarejestrowane :)',
          })
          push('Login')
        }
      },
      (y) => {
        Toast.show({
          type: 'error',
          text1: 'Coś poszło nie tak :(',
        })
      }
    )
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior={'position'}>
      <View>
        <Text style={styles.text}>Rejestracja</Text>
        <View style={styles.registerWrapper}>
          <Text>Nazwa użytkownika</Text>
          <TextInput
            isPassword={false}
            onChange={(e) => setLogin(e)}
          ></TextInput>
          <Text>Hasło</Text>
          <TextInput
            isPassword={true}
            onChange={(e) => setPassword(e)}
          ></TextInput>
          <Text>Powtórz hasło</Text>
          <TextInput
            isPassword={true}
            onChange={(e) => setRepPassword(e)}
          ></TextInput>
          <Text
            style={styles.login}
            onPress={() => {
              push('Login')
            }}
          >
            Zaloguj się
          </Text>
          <Button
            externalStyles={styles.button}
            btnTitle="Zarejestruj się"
            onPress={handleRegister}
            isDisabled={!login || !password || password !== repPassword}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    color: '#d66318',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 24,
    marginTop: 50,
  },
  login: {
    color: '#d66318',
    textAlign: 'right',
  },
  registerWrapper: {
    marginTop: 120,
  },
  button: {
    width: 150,
    marginTop: 50,
  },
})
