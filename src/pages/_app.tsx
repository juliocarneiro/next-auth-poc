import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Provider as AuthProvider } from 'next-auth/client'

import GlobalStyles from 'styles/global'
import favicon from 'assets/img/favicons/favicon.ico'
import one from 'assets/img/favicons/icon-512.png'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider session={pageProps.session}>
      <Head>
        <title>Skull Club</title>
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
        <link rel="shortcut icon" href={`${favicon}`} type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="512x512" href={`${one}`} />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default App
