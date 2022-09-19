import {
  Sheet,
  YStack,
  Button,
  XStack,
  Paragraph,
  H4,
  Separator,
  Square,
} from '@bookup/uikit'
import { useState } from 'react'

import { UserImage } from 'app/features/user'
import { timestampToDateString, timestampToTimeString } from 'app/features/time'
import { useRequest } from './request.service'

type Props = {
  id: number
  isOpen: boolean
  onClose: (value: boolean) => unknown
}

const SOCIALS = {
  telegram: {
    title: 'Telegram',
  },
  whatsapp: {
    title: 'WhatsApp',
  },
  viber: {
    title: 'Viber',
  },
}

export const RequestDetails = ({ isOpen, onClose, id }: Props) => {
  const { data } = useRequest(id)
  const [position, setPosition] = useState(0)

  if (!data) return null

  const { services, user, start, socials } = data

  return (
    <Sheet
      modal
      open={isOpen}
      onChangeOpen={onClose}
      snapPoints={[85, 50, 25]}
      dismissOnSnapToBottom
      position={position}
      onChangePosition={setPosition}
    >
      <Sheet.Overlay />
      <Sheet.Handle />
      <Sheet.Frame ai='center' jc='center'>
        <Sheet.ScrollView style={{ width: '100%', height: 1000 }}>
          <XStack py='$8' jc='center' w='100%'>
            <YStack maw={600} w='100%'>
              <YStack px='$4' pb='$4'>
                <H4>{timestampToDateString(start)}</H4>
                <XStack py='$4' ai='center' space>
                  <UserImage letter={user.firstName[0]} />
                  <Paragraph theme='alt2'>
                    {user.firstName} {user.lastName}
                  </Paragraph>
                </XStack>
                {services.map(({ name, price, duration }) => (
                  <>
                    <Separator />
                    <YStack py='$3' key={name}>
                      <XStack jc='space-between'>
                        <Paragraph>{name}</Paragraph>
                        <Paragraph>
                          {price.amount} {price.currancy}
                        </Paragraph>
                      </XStack>
                      <Paragraph theme='alt2'>
                        {timestampToTimeString(duration)}
                      </Paragraph>
                    </YStack>
                  </>
                ))}
                <Separator />
                <XStack pt='$3' pb='$5' jc='space-between'>
                  <Paragraph fow='600'>Result</Paragraph>
                  <Paragraph fow='600'>
                    {services.reduce((sum, { price }) => sum + price.amount, 0)}{' '}
                    {services[0]?.price.currancy}
                  </Paragraph>
                </XStack>
                <XStack dsp='flex' space mt='$2'>
                  <Button f={1}>Accept</Button>
                  <Button f={1}>Reject</Button>
                </XStack>
              </YStack>
              <YStack h='$16' px='$4' py='$4' bg='$gray3'>
                <Paragraph fos='$1' theme='alt2'>
                  Connect:
                </Paragraph>
                <XStack space>
                  {socials.map(({ type }) => (
                    <YStack ai='center' key={type}>
                      <Square br='$2' size={50} bc='$color' elevation='$4' />
                      <Paragraph fos='$1' theme='alt2'>
                        {SOCIALS[type]?.title}
                      </Paragraph>
                    </YStack>
                  ))}
                </XStack>
              </YStack>
            </YStack>
          </XStack>
        </Sheet.ScrollView>
      </Sheet.Frame>
    </Sheet>
  )
}
