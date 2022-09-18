import { XGroup, Button } from "@bookup/uikit"
import { Calendar, Grid, Bell, User } from '@tamagui/feather-icons'
import { useRouter } from "solito/router"

const menuItems = [
  {
    id: 0,
    icon: Calendar,
    url: '/calendar'
  },
  {
    id: 1,
    icon: Grid,
    url: '/'
  },
  {
    id: 2,
    icon: Bell,
    url: '/notifications'
  },
  {
    id: 3,
    icon: User,
    url: '/profile'
  }
]

export const MainMenu = () => {
  const { push } = useRouter()

  return (
    <XGroup
      style={{ position: 'fixed' } as any}
      bbrr='0'
      bblr='0'
      w='100%'
      b='0'
    >
      {menuItems.map(({ icon, id, url }) =>
        <Button onClick={() => push({ pathname: url })} f={1} key={id} icon={icon} />
      )}
    </XGroup>
  )
}