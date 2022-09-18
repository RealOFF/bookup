import { H3, Paragraph, YStack, Input, Label, XStack } from "@bookup/uikit"
import { useParam } from 'app/features/navigation'
import { useUser, UserImage } from "app/features/user"

export const Client = () => {
  const [id] = useParam('id')
  const { data } = useUser(id ? parseInt(id) : 0)
  return (
    <YStack py="$5" space>
      <H3 ta="center">Profile</H3>
      <YStack ai="center">
        <UserImage letter={data?.firstName} />
        <Paragraph py="$1" fow='600'>{data?.firstName} {data?.lastName}</Paragraph>
      </YStack>
      <YStack maw="600" pl="$10" pr="$10">
        <Label size="$2">Phone number</Label>
        <Input size="$3" bw={2} mb="$5" defaultValue="+375447634567" />
        <Label size="$2">Email</Label>
        <Input size="$3" bw={2} mb="$5" defaultValue="user@gmail.com" />
      </YStack>
      <XStack maw="600" jc="center" pl="$11" pr="$11" space>
        <YStack ai="center" w="33%" h="$7">
          <Paragraph> 40$ </Paragraph>
          <Paragraph> Payed </Paragraph>
        </YStack>
        <YStack ai="center" w="33%" h="$7">
          <Paragraph> 2 </Paragraph>
          <Paragraph> Visits </Paragraph>
        </YStack>
        <YStack ai="center" w="33%" h="$7">
          <Paragraph> 0 </Paragraph>
          <Paragraph> Pinned </Paragraph>
        </YStack>
      </XStack>
    </YStack >
  )
}
