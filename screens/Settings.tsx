import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { push } from '../App'

const handleSignOut = async () => {
  await AsyncStorage.removeItem('token')
}
export default function Settings() {
  return (
    <View>
      <Button
        btnTitle="Wyloguj"
        onPress={() => {
          handleSignOut()
        }}
      />
    </View>
  )
}
