import { StyleSheet, TouchableOpacity, Text, ViewStyle } from 'react-native'
import React from 'react'

interface ButtonProps {
  btnTitle: string
  onPress: () => void
  externalStyles?: ViewStyle
  isDisabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  btnTitle,
  onPress,
  externalStyles,
  isDisabled,
}) => {
  return (
    <TouchableOpacity
      style={
        !isDisabled
          ? [styles.button, externalStyles]
          : [styles.button, styles.disabledButton, externalStyles]
      }
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text
        style={!isDisabled ? styles.text : [styles.text, styles.disabledText]}
      >
        {btnTitle}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fdfdfd',
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
  disabledButton: {
    borderColor: '#808080',
  },
  disabledText: {
    color: '#808080',
  },
})
