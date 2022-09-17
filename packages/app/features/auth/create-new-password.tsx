import { Input, Button, H3, XStack, YStack } from '@my/ui'
import React from 'react'
import { useLink } from 'solito/link'

export function LoginScreen() {
  const loginLinkProps = useLink({
    href: '/auth/login',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H3 ta="center">Create new password</H3>
      </YStack>
      <YStack w={'100%'} space="$4" maw={600}>
        <Input textContentType='newPassword' placeholder='New password' />
        <Input textContentType='newPassword' placeholder='Repeat new password' />
        <Button {...loginLinkProps}>Recovery</Button>
      </YStack>
      <XStack>
      </XStack>
    </YStack>
  )
}
