import { Circle, Image, H4 } from '@bookup/uikit'

type Props = {
  image?: string
  letter?: string
}

export const UserImage = ({ image, letter }: Props) => {
  return image ? (
    <Image width={56} height={56} src={image} />
  ) : (
    <Circle size={56} bc='$gray4' elevation='$4'>
      <H4 color='$gray9'>{letter}</H4>
    </Circle>
  )
}
