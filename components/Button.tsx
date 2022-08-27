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
    backgroundColor: '#FDFDFD',
    borderWidth: 2,
    borderColor: '#d66318',
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#d66318',
    fontWeight: 'bold',
    padding: 4,
  },
})
