import { H3, Paragraph, YStack, Input, Label, XStack } from "@bookup/uikit"
import { useParam } from 'app/features/navigation'
import { useUser, UserImage } from "app/features/user"
import { useRequests, RequestCard } from "app/features/requests"


export const Client = () => {
  const [id] = useParam('id')
  const { data } = useUser(id ? parseInt(id) : 0)

  const { data: requests } = useRequests({ userId: id ? parseInt(id) : 0 });

  return (
    <YStack ai="center" py="$5" space>
      <H3 ta="center">Profile</H3>
      <YStack ai="center">
        <UserImage letter={data?.firstName[0]} />
        <Paragraph py="$1" fow='600'>{data?.firstName} {data?.lastName}</Paragraph>
      </YStack>

      <YStack maw={600} w="100%" pl="$14" pr="$14">
        <Label size="$2" >Phone number</Label>
        <Input size="$3" bw={2} mb="$5" defaultValue="+375447634567" />
        <Label size="$2">Email</Label>
        <Input size="$3" bw={2} mb="$5" defaultValue="user@gmail.com" />
      </YStack>

      <XStack maw={600} w="100" jc="center" pl="$10" pr="$10" space>
        <YStack ai="center" maw="70" h="$7">
          <Paragraph> 40$ </Paragraph>
          <Paragraph> Payed </Paragraph>
        </YStack>
        <YStack ai="center" maw="70" pl="4%">
          <Paragraph> 2 </Paragraph>
          <Paragraph> Visits </Paragraph>
        </YStack>
        <YStack ai="center" maw="70" h="$7" pl="4%">
          <Paragraph> 0 </Paragraph>
          <Paragraph> Pinned </Paragraph>
        </YStack>
      </XStack>

      <YStack ai="center" pl="$10" pr="$10">
        <YStack w="100%">
          {requests.map((request) =>
            <RequestCard
              {...request}
            />)}
        </YStack>
      </YStack>
    </YStack >
  )
}
