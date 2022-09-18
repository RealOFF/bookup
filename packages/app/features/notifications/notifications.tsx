import { H3, YStack } from "tamagui"
import { useCallback, useMemo } from 'react'

import { UnderlineMenu } from 'app/features/menu'
import { useState } from "react"
import { Requests } from "./requests/requests"

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
    <YStack ai="center" py="$5" space>
      <H3 ta="center">Notifications</H3>
      <UnderlineMenu onItemClick={onMenuItemClick} items={menuItems} />
      <Content />
    </YStack>
  )
}
