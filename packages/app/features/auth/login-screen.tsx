import {
  Input,
  Button,
  H3,
  XStack,
  YStack,
  Paragraph,
  ButtonText,
  Square
} from '@bookup/uikit'

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
        <Paragraph> or login with:</Paragraph>
      </XStack>
      <XStack space>
        {new Array(2).fill(0).map(({ type }) =>
          <YStack ai='center' key={type}>
            <Square br='$2' size={50} bc="$color" elevation="$4" />
          </YStack>
        )}
      </XStack>
    </YStack>
  )
}
