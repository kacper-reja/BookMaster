import { TextInput as RnTextInput, StyleSheet } from 'react-native'
import React from 'react'

interface TextInputProps {
  isPassword: boolean
  onChange?: (e: string) => void
  text?: string
}

export const TextInput: React.FC<TextInputProps> = ({
  isPassword,
  onChange,
  text,
}) => {
  return (
    <RnTextInput
      secureTextEntry={isPassword}
      style={styles.textInput}
      onChangeText={onChange}
      value={text}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    width: 150,
    marginBottom: 8,
    marginTop: 4,
    borderRadius: 5,
  },
})
