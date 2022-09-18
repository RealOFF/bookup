import { Button, H3, XGroup, YGroup, YStack } from '@bookup/uikit'
import { useLink } from 'solito/link'

export const BusinessDashboard = () => {
  const clientsLinkProps = useLink({
    href: '/clients',
  })

  return (
    <YStack ai="center" maw="600">
      <YStack space>
        <H3 ta="center">Your business</H3>
        <YGroup>
          <XGroup>
            <Button {...clientsLinkProps}>
              Clients
            </Button>
            <Button>
              Clients
            </Button>
            <Button>
              Clients
            </Button>
          </XGroup>
          <XGroup>
            <Button>
              Clients
            </Button>
            <Button>
              Clients
            </Button>
            <Button>
              Clients
            </Button>
          </XGroup>
        </YGroup>
      </YStack>
    </YStack>
  )
}
