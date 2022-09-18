import { XGroup, } from "@bookup/uikit"
import Button from "@bookup/uikit/dist/cjs/components/Button"
import { Calendar, Grid, Bell, User } from '@tamagui/feather-icons'

const menuItems = [
  {
    id: 0,
    icon: Calendar
  },
  {
    id: 1,
    icon: Grid
  },
  {
    id: 2,
    icon: Bell
  },
  {
    id: 3,
    icon: User
  }
]

export const MainMenuMobile = () => {
  return (
    <XGroup space>
      {menuItems.map(({ icon, id }) =>
        <Button key={id} icon={icon}></Button>
      )}
    </XGroup>
  )
}