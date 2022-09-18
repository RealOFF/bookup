import { YStack } from '@bookup/uikit'
import { RequestCard } from './request-card'
import { useRequests } from './request.service'

export const Requests = () => {
  const { data: requests } = useRequests()

  return (
    <YStack ai="center" py="$5" px="$3" space>
      {requests.map((item) =>
        <RequestCard
          key={`${item.id}`}
          {...item}
        />
      )}
    </YStack>
  )
}
