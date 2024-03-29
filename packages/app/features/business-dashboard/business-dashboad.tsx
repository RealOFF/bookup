import {
  Button,
  ButtonProps,
  H3,
  Paragraph,
  XStack,
  YStack,
  H4,
  useTheme,
} from '@bookup/uikit'
import {
  Tag,
  Gift,
  Users,
  PieChart,
  UserPlus,
  Send,
} from '@tamagui/feather-icons'
import { useLink } from 'solito/link'

const StyledButton = (props: ButtonProps) => (
  <Button {...props} h='$7' w='33.3%' fd='column' chromeless color='$color' />
)

export const BusinessDashboard = () => {
  const theme = useTheme()
  const clientsLinkProps = useLink({
    href: '/clients',
  })

  return (
    <YStack w='100%' ai='center'>
      <YStack py='$4' px='$3' jc='space-between' w='100%' maw={600}>
        <YStack w='100%' space='$6'>
          <H3 ta='center'>Your business</H3>
          <YStack w='100%' dsp='flex'>
            <XStack dsp='flex'>
              <StyledButton {...clientsLinkProps}>
                <Users color={theme.color.variable} />
                Clients
              </StyledButton>
              <StyledButton>
                <UserPlus color={theme.color.variable} />
                Visits
              </StyledButton>
              <StyledButton>
                <Send color={theme.color.variable} />
                Newsletter
              </StyledButton>
            </XStack>
            <XStack dsp='flex'>
              <StyledButton>
                <Tag color={theme.color.variable} />
                Discounts
              </StyledButton>
              <StyledButton>
                <PieChart color={theme.color.variable} />
                Analystsp
              </StyledButton>
              <StyledButton>
                <Gift color={theme.color.variable} />
                Bonuses
              </StyledButton>
            </XStack>
          </YStack>
        </YStack>
        <YStack mt='$12' p='$6' bg='$gray3' br='$5'>
          <H4>Everything for your business processes</H4>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Paragraph>
        </YStack>
      </YStack>
    </YStack>
  )
}
