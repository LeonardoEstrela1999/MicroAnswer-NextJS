import '../styles/globals.css'
import Layout from './layout'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';
import 'typeface-source-sans-pro';
import 'typeface-merriweather';
function MyApp({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default appWithTranslation(MyApp)
