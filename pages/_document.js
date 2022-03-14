import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <meta lang='en' translate='false' />
        <meta name="image" property="og:image" content="/portrait.webp" />
        <meta name="author" content="Patrick Vilchez" />
        <meta name="description" content="A page to present my information, projects and contact data." />
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
