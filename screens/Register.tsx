import { View, Text, StyleSheet } from 'react-native'
import { Button } from '../components/Button'
import { TextInput } from '../components/TextInput'
import React from 'react'
import { push } from '../App'
import Toast from 'react-native-toast-message'

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rejestracja</Text>
      <View style={styles.registerWrapper}>
        <Text>Nazwa użytkownika</Text>
        <TextInput isPassword={false} onChange={() => {}}></TextInput>
        <Text>Hasło</Text>
        <TextInput isPassword={true} onChange={() => {}}></TextInput>
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
          onPress={() => {
            Toast.show({ type: 'error', text1: 'Ni ma bazki' })
          }}
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
