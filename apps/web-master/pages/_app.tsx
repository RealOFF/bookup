import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { Main } from '@bookup/uikit'
import { Provider } from 'app/provider'
import { MainMenu } from 'app/features/menu'
import Head from 'next/head'
import React, { PropsWithChildren, useMemo } from 'react'
import type { SolitoAppProps } from 'solito'
import 'raf/polyfill'

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Main pb='$7'>
      {children}
      <MainMenu />
    </Main>
  )
}

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const [theme, setTheme] = useRootTheme()

  const contents = useMemo(() => {
    return <Component {...pageProps} />
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageProps])

  return (
    <>
      <Head>
        <title>Bookup</title>
        <meta name='description' content='Tamagui, Solito, Expo & Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NextThemeProvider onChangeTheme={setTheme}>
        <Provider disableRootThemeClass defaultTheme={theme}>
          <Layout>{contents}</Layout>
        </Provider>
      </NextThemeProvider>
    </>
  )
}

export default MyApp
