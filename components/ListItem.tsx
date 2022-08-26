import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from './Button'

interface ListItemProps {
  title: string
  author: string
  date: string
}

export const ListItem: React.FC<ListItemProps> = ({ title, author, date }) => {
  return (
    <Button
      externalStyles={styles.button}
      btnTitle={title}
      onPress={() => {}}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    marginTop: 20,
  },
})
