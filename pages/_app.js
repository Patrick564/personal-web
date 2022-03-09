import '../styles/styles.css'

import Head from 'next/head'

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
