// TODO: change name to globals
import '../styles/styles.css'

// font awesome test
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

import Head from 'next/head'

// d
config.autoAddCss = false

const PersonalWeb = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Patrick Vilchez</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default PersonalWeb
