import { View, Text, StyleSheet } from 'react-native'
import { Button } from '../components/Button'
import { TextInput } from '../components/TextInput'
import { useState } from 'react'
import { push } from '../App'
import Toast from 'react-native-toast-message'
import { useRegisterMutation } from '../api'

export default function Register() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
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
    <View style={styles.container}>
      <Text style={styles.text}>Rejestracja</Text>
      <View style={styles.registerWrapper}>
        <Text>Nazwa użytkownika</Text>
        <TextInput isPassword={false} onChange={setLogin}></TextInput>
        <Text>Hasło</Text>
        <TextInput isPassword={true} onChange={setPassword}></TextInput>
        <Text>Powtórz hasło</Text>
        <TextInput isPassword={true} onChange={() => {}}></TextInput>
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
        />
      </View>
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
