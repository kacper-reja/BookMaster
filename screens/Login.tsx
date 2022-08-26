import { Image, StyleSheet, View, Text } from 'react-native'
import { Button } from '../components/Button'
import { TextInput } from '../components/TextInput'
import { push } from '../App'

interface LoginProps {
  setIsAuthorized: (isAuthorized: boolean) => void
}

export default function Login({ setIsAuthorized }: LoginProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
      <View style={styles.loginWrapper}>
        <Text style={styles.text}>Nazwa użytkownika</Text>
        <TextInput isPassword={false} onChange={() => {}} />
        <Text style={styles.text}>Hasło</Text>
        <TextInput isPassword={true} onChange={() => {}} />
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
        onPress={() => {
          setIsAuthorized(true)
        }}
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
