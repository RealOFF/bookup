import { Input, Button, H3, XStack, YStack, Sheet, Popover } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/feather-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function SignupScreen() {
  const linkProps = useLink({
    href: '/auth/signup',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <XStack>
        <YStack space="$4" maw={600}>
          <H3 ta="center">Welcome to Bookup</H3>
        </YStack>
      </XStack>

      <YStack w={'100%'} space="$4" maw={600}>
        <Input keyboardType='email-address' placeholder='Email' />
        <Input textContentType='newPassword' placeholder='Password' />
        <Input textContentType='newPassword' placeholder='Repeat password' />
        <Button {...linkProps}>Signup</Button>
      </YStack>
    </YStack>
  )
}
