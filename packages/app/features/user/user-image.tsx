import { Circle, Paragraph, Image } from '@bookup/uikit'

type Props = {
  image?: string
  letter?: string
}

export const UserImage = ({ image, letter }: Props) => {
  return (image ?
    <Image width={56} height={56} src={image} /> :
    <Circle size={56} bc="$gray11" elevation="$4" >
      <Paragraph>
        {letter}
      </Paragraph>
    </Circle>
  )
}