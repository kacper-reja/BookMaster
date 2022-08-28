import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { ListItem } from '../components/ListItem'
import { useGetAllBooksQuery } from '../api'
import AsyncStorage from '@react-native-async-storage/async-storage/'

interface IData {
  _id: string
  title: string
  author: string
  release_date: string
}

export default function List() {
  const [token, setToken] = useState('')
  const { data, isLoading, isError } = useGetAllBooksQuery(token, token !== '')
  const [, updateState] = useState<undefined>()
  const parsedData =
    data &&
    ((data as any).books as IData[]).map((item) => ({
      title: item.title,
      _id: item._id,
    }))
  useEffect(() => {
    ;(async () => {
      const t = await AsyncStorage.getItem('token')
      setToken(t ?? '')
    })()
  }, [])

  if (!isLoading) {
    return (
      <FlatList
        style={{ width: '100%', padding: 5 }}
        data={(parsedData as any[]) ?? []}
        renderItem={({ item }) => <ListItem title={item.title} id={item._id} />}
      ></FlatList>
    )
  }
  return <Text>Loading</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})
