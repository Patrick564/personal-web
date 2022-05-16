import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang='en' translate='no'>
      <Head>
        <meta lang='en' content='notranslate' />
        <meta name="image" property="og:image" content="/portrait.png" />
        <meta name="image" property="og:image:secure_url" content="/portrait.png" />
        <meta name="author" content="Patrick Vilchez" />
        <meta name="description" content="A page to present my information, projects and contact data." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/ellipsis.svg" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
