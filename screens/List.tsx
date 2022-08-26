import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { ListItem } from '../components/ListItem'

const DATA = [
  {
    title: 'Wiedzmin',
    author: 'Sapcio',
    date: '2142142342342',
  },
  {
    title: 'Wiedzmin',
    author: 'Sapcio',
    date: '2142142342342',
  },
  {
    title: 'Wiedzmin',
    author: 'Sapcio',
    date: '2142142342342',
  },
  {
    title: 'Wiedzmin',
    author: 'Sapcio',
    date: '2142142342342',
  },
  {
    title: 'Wiedzmin',
    author: 'Sapcio',
    date: '2142142342342',
  },
]

export default function List() {
  return (
    <FlatList
      style={{ width: '100%', padding: 5 }}
      data={DATA}
      renderItem={({ item }) => (
        <ListItem title={item.title} author={item.author} date={item.date} />
      )}
    ></FlatList>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})
