import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { LoginScreen } from '../../features/auth/login-screen'
import { SignupScreen } from 'app/features/auth/signup-screen'
import { AccountRecoveryScreen } from 'app/features/auth/account-recovery'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  login: undefined
  signup: undefined
  'account-recovery': undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignupScreen}
        options={{
          title: 'Signup',
        }}
      />
      <Stack.Screen
        name="account-recovery"
        component={AccountRecoveryScreen}
        options={{
          title: 'AccountRecovery',
        }}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator>
  )
}
