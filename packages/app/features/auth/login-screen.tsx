import {
  Input,
  Button,
  H3,
  XStack,
  YStack,
  Text,
  ButtonText,
} from '@bookup/uikit'
import React from 'react'
import { useLink } from 'solito/link'

export function LoginScreen() {
  const signupLinkProps = useLink({
    href: '/auth/signup',
  })
  const accountRecoveryLinkProps = useLink({
    href: '/auth/account-recovery',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H3 ta="center">Welcome to Bookup</H3>
      </YStack>
      <YStack w="100%" space="$4" maw={600}>
        <Input keyboardType="email-address" placeholder="Email" />
        <Input textContentType="password" placeholder="Password" />
        <XStack jc="flex-end">
          <ButtonText {...accountRecoveryLinkProps}>
            Forgot password?
          </ButtonText>
        </XStack>
        <Button>Login</Button>
      </YStack>
      <XStack jc="center" ai="center">
        <ButtonText {...signupLinkProps}>Create account</ButtonText>
        <Text> or login with:</Text>
      </XStack>
      <XStack></XStack>
    </YStack>
  )
}
