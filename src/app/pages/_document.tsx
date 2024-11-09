import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnsEfJ_v0V2KyQPz3Cryoy_n45a3UkUqc&libraries=places"></script>
          {/* Preconnect for fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          {/* Fonts */}
          <link 
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Quicksand:wght@300..700&family=Roboto:wght@400;700;900&display=swap" 
            rel="stylesheet" 
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}