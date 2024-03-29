import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '../styles/globals.css'

type AppPropsWithLayout = AppProps & {
  Component: NextPage
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
