import Login from './screens/Login'
import Register from './screens/Register'
import List from './screens/List'
import Form from './screens/Form'
import {
  NavigationContainer,
  TabActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useState } from 'react'
import Toast from 'react-native-toast-message'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
export const navigationRef = createNavigationContainerRef()

export const push = (screen: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(screen, params))
  }
}

function Auth() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Form" component={Form} />
    </Tab.Navigator>
  )
}

export default function App() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {isAuthorized ? (
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen name="Login">
              {(props: any) => (
                <Login {...props} setIsAuthorized={setIsAuthorized} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  )
}
