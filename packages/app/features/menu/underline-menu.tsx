import { useState } from 'react'
import { XGroup, ButtonText } from 'tamagui'

type Props = {
  items: {
    props?: Record<string, unknown>
    title: string
  }[]
  onItemClick?: (title: number) => unknown
}

export const UnderlineMenu = ({ items, onItemClick }: Props) => {
  const [selected, setSelected] = useState(0)

  const onClick = (selected: number) => {
    onItemClick && onItemClick(selected)
    setSelected(selected)
  }

  return (
    <XGroup maw={600} space br='$0' size='$3'>
      {items.map(({ title, props }, index) => (
        <ButtonText
          cursor='pointer'
          key={title}
          onPress={() => onClick(index)}
          borderBottomWidth={items[selected]?.title === title ? '$1' : ''}
          {...props}
        >
          {title}
        </ButtonText>
      ))}
    </XGroup>
  )
}
