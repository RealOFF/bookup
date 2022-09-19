import {
  Card,
  H4,
  Paragraph,
  SizableText,
  XStack,
  Button,
  YStack,
} from '@bookup/uikit'
import { useState } from 'react'

import { timestampToDateString, timestampToTimeString } from 'app/features/time'
import { UserImage } from 'app/features/user'
import { RequestDetails } from './request-details'

type Props = {
  id: number
  start: number
  user: {
    firstName: string
    lastName: string
  }
  services: {
    name: string
    duration: number
    price: {
      amount: number
      currancy: string
    }
  }[]
  comment: string
}

export const RequestCard = ({ start, user, services, id }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card cursor='pointer' onClick={() => setIsOpen(true)} px='$3' py='$4'>
      <XStack space>
        <UserImage letter={user.firstName[0]} />
        <YStack>
          <H4>{timestampToDateString(start)}</H4>
          <Paragraph theme='alt2'>
            {user.firstName} {user.lastName}
          </Paragraph>
          <Paragraph>{services.map(({ name }) => name).join(', ')}</Paragraph>
          <Paragraph>
            <SizableText color='$gray10'>
              {timestampToTimeString(
                services.reduce((sum, { duration }) => sum + duration, 0)
              )}{' '}
            </SizableText>
            <SizableText fow='600'>
              {services.reduce((sum, { price }) => sum + price.amount, 0)}{' '}
              {services[0]?.price.currancy}
            </SizableText>
          </Paragraph>
          <XStack mt='$2' space>
            <Button>Accept</Button>
            <Button>Reject</Button>
          </XStack>
        </YStack>
      </XStack>
      <RequestDetails id={id} onClose={setIsOpen} isOpen={isOpen} />
    </Card>
  )
}
