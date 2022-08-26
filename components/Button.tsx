import { StyleSheet, TouchableOpacity, Text, ViewStyle } from 'react-native'
import React from 'react'

interface ButtonProps {
  btnTitle: string
  onPress: () => void
  externalStyles?: ViewStyle
}

export const Button: React.FC<ButtonProps> = ({
  btnTitle,
  onPress,
  externalStyles,
}) => {
  return (
    <TouchableOpacity style={[styles.button, externalStyles]} onPress={onPress}>
      <Text style={styles.text}>{btnTitle}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ababab',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    padding: 4,
  },
})
