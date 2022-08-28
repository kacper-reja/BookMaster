import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { push } from '../App'

interface SettingsProps {
  setIsAuthorized: (isAuthorized: boolean) => void
}

export default function Settings({ setIsAuthorized }: SettingsProps) {
  const handleSignOut = async () => {
    await AsyncStorage.removeItem('token')
    setIsAuthorized(false)
  }

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
