import { Card, H4, Paragraph, SizableText, XStack, Button } from '@bookup/uikit'
import { timestampToDateString, timestampToTimeString } from 'app/features/time'
import { UserImage } from 'app/features/user'

type Props = {
  start: number
  user: {
    firstName: string
    lastName: string
  }
  description: string
  duration: number
  price: {
    amount: number
    currancy: string
  }
  comment: string
}

export const RequestCard = ({ start, user, description, duration, price }: Props) => {
  return <Card shadowColor="$blue1">
    <XStack space>
      <UserImage letter={user.firstName[0]} />
      <Card.Header>
        <H4>{timestampToDateString(start)}</H4>
        <Paragraph theme="alt2">{user.firstName} {user.lastName}</Paragraph>
        <Paragraph>{description}</Paragraph>
        <Paragraph>
          {timestampToTimeString(duration)}{' '}
          <SizableText fow="600">
            {price.amount} {price.currancy}
          </SizableText>
        </Paragraph>
        <Paragraph></Paragraph>
      </Card.Header>
      <Card.Footer>
        <Button backgroundColor="$blue1">
          Accept
        </Button>
        <Button>
          Reject
        </Button>
      </Card.Footer>
    </XStack>
  </Card>
}
