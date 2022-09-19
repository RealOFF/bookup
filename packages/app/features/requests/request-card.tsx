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
  useUserName?: boolean
  useUserImage?: boolean
  useInteractable?: boolean
  onStatus?: boolean
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

export const RequestCard = ({
  start,
  user,
  services,
  id,
  useUserImage,
  useUserName,
  useInteractable,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card cursor='pointer' onClick={() => setIsOpen(true)} px='$3' py='$4'>
      <XStack space>
        {useUserImage ? <UserImage letter={user.firstName[0]} /> : null}
        <YStack>
          <H4>{timestampToDateString(start)}</H4>
          {useUserName ? (
            <Paragraph theme='alt2'>
              {user.firstName} {user.lastName}
            </Paragraph>
          ) : null}
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
          {useInteractable ? (
            <XStack mt='$2' space>
              <Button>Accept</Button>
              <Button>Reject</Button>
            </XStack>
          ) : null}
        </YStack>
      </XStack>
      <RequestDetails id={id} onClose={setIsOpen} isOpen={isOpen} />
    </Card>
  )
}
