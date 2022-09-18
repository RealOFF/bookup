import { Sheet, YStack, Button, XStack, Paragraph, H4, Separator } from '@bookup/uikit'
import { useState } from 'react'

import { UserImage } from 'app/features/user'
import { timestampToDateString, timestampToTimeString } from 'app/features/time'
import { useRequest } from './request.service'

type Props = {
  id: number
  isOpen: boolean
  onClose: (value: boolean) => unknown
}

export const RequestDetails = ({ isOpen, onClose, id }: Props) => {
  const { data } = useRequest(id)
  const [position, setPosition] = useState(0)

  if (!data) return null

  const {
    services,
    user,
    start
  } = data

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
      <Sheet.Frame ai="center" jc="center">
        <Sheet.ScrollView style={{ width: '100%' }}>
          <XStack py='$8' jc='center' w='100%'>
            <YStack maw={600} w='100%'>
              <H4>{timestampToDateString(start)}</H4>
              <XStack py='$4' ai='center' space>
                <UserImage letter={user.firstName[0]} />
                <Paragraph theme="alt2">{user.firstName} {user.lastName}</Paragraph>
              </XStack>
              {services.map(({ name, price, duration }) =>
                <>
                  <Separator />
                  <YStack py='$3' key={name}>
                    <XStack jc='space-between'>
                      <Paragraph>{name}</Paragraph>
                      <Paragraph>{price.amount} {price.currancy}</Paragraph>
                    </XStack>
                    <Paragraph theme='alt2'>{timestampToTimeString(duration)}</Paragraph>
                  </YStack>
                </>
              )}
              <Separator />
              <XStack pt='$3' pb='$5' jc='space-between'>
                <Paragraph fow='600'>Result</Paragraph>
                <Paragraph fow='600'>
                  {
                    services.reduce((sum, { price }) => sum + price.amount, 0)
                  } {services[0]?.price.currancy}
                </Paragraph>
              </XStack>
              <XStack dsp='flex' mt="$2">
                <Button w='50%'>
                  Accept
                </Button>
                <Button ml='$4' w='50%'>
                  Reject
                </Button>
              </XStack>
            </YStack>
          </XStack>
        </Sheet.ScrollView>
      </Sheet.Frame>
    </Sheet>
  )
}
