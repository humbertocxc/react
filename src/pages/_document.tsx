import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
      <Head>
        <link rel="preconect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wgth@400;700;900&display=swap" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      </Html>
    )
  }
}