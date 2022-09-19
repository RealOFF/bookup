import { H3, Paragraph, YStack, Input, Label } from '@bookup/uikit'
import { useParam } from 'app/features/navigation'
import { useUser, UserImage } from 'app/features/user'

export const Client = () => {
  const [id] = useParam('id')
  const { data } = useUser(id ? parseInt(id) : 0)
  return (
    <YStack py='$5' space>
      <H3 ta='center'>Profile</H3>
      <YStack ai='center'>
        <UserImage letter={data?.firstName} />
        <Paragraph py='$1' fow='600'>
          {data?.firstName} {data?.lastName}
        </Paragraph>
      </YStack>
      <YStack padding='$-10'>
        <Label size='$2'>Phone number</Label>
        <Input
          size='$3'
          borderWidth={2}
          marginBottom='$5'
          paddingLeft='$-10'
          defaultValue='+375447634567'
        />
        <Label size='$2'>Email</Label>
        <Input
          size='$3'
          borderWidth={2}
          padding='$-10'
          defaultValue='user@gmail.com'
        />
      </YStack>
    </YStack>
  )
}
