import { Text } from 'react-native'

export const Chevron = () => {
  return (
    <Text
      style={{
        fontSize: 20,
        fontWeight: '800',
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingRight: 10,
        color: '#d66318',
      }}
    >
      {'>'}
    </Text>
  )
}
