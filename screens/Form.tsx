import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { useEffect, useState } from 'react'
import { TextInput } from '../components/TextInput'
import { Button } from '../components/Button'
import Toast from 'react-native-toast-message'
import {
  useAddBookMutation,
  useUpdateBookMutation,
  useGetBookDetailsQuery,
  useDeleteBookMutation,
} from '../api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { push } from '../App'

interface FormProps {
  route: any
}
export default function Form({ route }: FormProps) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [date, setDate] = useState('')
  const [token, setToken] = useState('')
  const { mutate } = useAddBookMutation(
    { title, author, release_date: date },
    token
  )

  const id = route?.params?._id
  const { mutate: mutateUpdate } = useUpdateBookMutation(
    { title, author, release_date: date },
    token,
    id
  )

  const { mutate: mutateDelete } = useDeleteBookMutation(token, id)

  const { data, isError } = useGetBookDetailsQuery(token, id, token !== '')
  console.log(data)
  useEffect(() => {
    setTitle((data as any)?.title ?? '')
    setAuthor((data as any)?.author ?? '')
    setDate((data as any)?.release_date ?? '')
  }, [data])

  useEffect(() => {
    ;(async () => {
      const t = await AsyncStorage.getItem('token')
      setToken(t ?? '')
    })()
  }, [])
  const handleUpdate = async () => {
    await mutateUpdate(
      (x: any) => {
        console.log(x)
      },
      (y: any) => {
        console.log(y)
      }
    )
  }
  const handleAdd = async () => {
    await mutate(
      (x: any) => {
        Toast.show({
          type: 'success',
          text1: 'Pomyślnie dodano książkę :)',
        })
      },
      (y: any) => {
        Toast.show({
          type: 'error',
          text1: 'Coś poszło nie tak :(',
        })
      }
    )
  }
  const handleDelete = async () => {
    await mutateDelete(
      (x: any) => {
        console.log(x)
        push('Auth', {
          screen: 'List',
        })
      },
      (y: any) => {
        console.log(y)
      }
    )
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior={'height'}>
      <View>
        <Text>Nazwa</Text>
        <TextInput
          isPassword={false}
          text={title}
          onChange={(e) => {
            setTitle(e)
          }}
        ></TextInput>
        <Text>Autor</Text>
        <TextInput
          isPassword={false}
          text={author}
          onChange={(e) => {
            setAuthor(e)
          }}
        ></TextInput>
        <Text>Data wydania</Text>
        <TextInput
          isPassword={false}
          text={date}
          onChange={(e) => {
            setDate(e)
          }}
        ></TextInput>
        <Button
          externalStyles={styles.button}
          btnTitle={id ? 'Edytuj' : 'Dodaj'}
          onPress={id ? handleUpdate : handleAdd}
        />
        {id && (
          <Button
            externalStyles={styles.button}
            btnTitle={'Usuń'}
            onPress={handleDelete}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  button: {
    width: 150,
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
