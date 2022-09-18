import { H3, YStack } from "tamagui"
import { useMemo } from 'react'

import { UnderlineMenu } from 'app/features/menu'
import { useState } from "react"
import { Requests } from "app/features/requests"

const menuItems = [
  {
    title: 'Requests'
  },
  {
    title: 'Rejected requests'
  }
]

export const Notifications = () => {
  const [selected, setSelected] = useState(0)

  const onMenuItemClick = (selected: number) => {
    setSelected(selected)
  }

  const Content = useMemo(() => ([Requests][selected] || (() => null)), [])

  return (
    <YStack ai="center" pt="$5">
      <YStack>
        <H3 mb="$5" ta="center">Notifications</H3>
        <UnderlineMenu onItemClick={onMenuItemClick} items={menuItems} />
      </YStack>
      <YStack w="100%" bg="$gray3">
        <Content />
      </YStack>
    </YStack>
  )
}
