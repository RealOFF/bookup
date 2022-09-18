import { YStack, ListItem, Separator, Input, H3 } from '@bookup/uikit'
import { ChevronRight } from '@tamagui/feather-icons'

import { useUsers, UserImage } from 'app/features/user'
import { useLink } from 'solito/link'
import { useRouter } from 'solito/router'

export const Clients = () => {
  const { data: clients } = useUsers()
  const { push } = useRouter()

  const handleClick = (index) => {
    push({
      pathname: 'clients/[id]',
      query: {
        id: index
      }
    })
  }

  return (
    <YStack py="$5" space>
      <H3 ta="center">Clients</H3>
      <Input f={1} placeholder='Search...' />
      <YStack>
        {clients.map(({ phoneNumber, firstName, lastName }, index) =>
          <>
            {index !== 0 ? <Separator /> : null}
            <ListItem
              onClick={() => handleClick(index)}
              key={phoneNumber}
              hoverTheme
              pressTheme
              title={`${firstName} ${lastName}`}
              subTitle={phoneNumber}
              icon={<UserImage letter={firstName[0]} />}
              iconAfter={ChevronRight}
            />
          </>)}
      </YStack>
    </YStack>
  )
}
