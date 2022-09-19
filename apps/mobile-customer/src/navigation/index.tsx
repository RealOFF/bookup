import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginScreen } from 'app/features/auth/login-screen'
import { SignupScreen } from 'app/features/auth/signup-screen'
import { AccountRecoveryScreen } from 'app/features/auth/account-recovery-screen'

const Stack = createNativeStackNavigator<{
  login: undefined
  signup: undefined
  'account-recovery': undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='login'
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name='signup'
        component={SignupScreen}
        options={{
          title: 'Signup',
        }}
      />
      <Stack.Screen
        name='account-recovery'
        component={AccountRecoveryScreen}
        options={{
          title: 'AccountRecovery',
        }}
      />
    </Stack.Navigator>
  )
}
