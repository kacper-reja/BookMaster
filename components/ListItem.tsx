import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from './Button'
import { Chevron } from './Chevron'
import { push } from '../App'
interface ListItemProps {
  title: string
  id: string
}

export const ListItem: React.FC<ListItemProps> = ({ title, id }) => {
  return (
    <View style={styles.buttonWrapper}>
      <Button
        externalStyles={styles.button}
        btnTitle={title}
        onPress={() =>
          push('Auth', {
            screen: 'Form',
            params: { _id: id },
          })
        }
      />
      <Chevron />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
  },
  buttonWrapper: {
    position: 'relative',
    alignContent: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
    marginTop: 20,
  },
})
