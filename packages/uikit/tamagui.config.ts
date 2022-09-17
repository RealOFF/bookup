import { config } from '@bookup/config'

export type Conf = typeof config

declare module '@bookup/uikit' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config
