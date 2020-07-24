import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...ctx, ...initialProps};
  }
  render() {
    return (
      <Html lang="jp">
        <Head>
          {/* ここにメタ情報を書く */}
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}