import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          {/* Global css settings */}
          <style jsx global>{`
            body,
            div,
            ul,
            ol,
            li,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            pre,
            form,
            fieldset,
            input,
            textarea,
            p,
            blockquote,
            th,
            td {
              margin: 0;
              padding: 0;
            }
            table {
              border-collapse: collapse;
              border-spacing: 0;
            }
            input {
              border: none;
            }
            img {
              border: 0;
            }
            i {
              font-style: normal;
            }
            li,
            img,
            em,
            i {
              list-style: none;
              border: none;
            }
            * {
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              font-weight: normal;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              -webkit-text-size-adjust: 100%;
            }
            html {
              font-size: 10px;
            }
            html body {
              background: #232323;
              background-size: cover;
              font-family: Helvetica, Arial, sans-serif;
              font-size: 14px;
              line-height: 1;
              color: #2e2e2e;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            html body a,
            html body a:active,
            html body a:hover {
              color: #2e2e2e;
              cursor: pointer;
              text-decoration: none;
            }
            html body iframe {
              border: 0;
            }
            html body .text-uppercase {
              text-transform: uppercase;
            }
            ul,
            ol,
            li {
              margin: 0;
              padding: 0;
              list-style: none;
            }
            input:focus,
            button:focus,
            textarea:focus {
              outline: none;
            }
            button {
              background: none;
              border: none;
              padding: 0;
              margin: 0;
            }
            button:focus {
              outline: none;
            }
            .backgroundOther {
              background-repeat: no-repeat;
              background-position: center center;
              background-size: cover;
            }
            @font-face {
              font-family: Helvetica.ttc;
              src: url(../static/font/Helvetica.ttc) format("opentype");
            }
            @font-face {
              font-family: Bradley-Hand-Bold.ttf;
              src: url(../static/font/BradleyHand-Bold.ttf) format("opentype");
            }
            @font-face {
              font-family: Impact.ttf;
              src: url(../static/font/Impact.ttf) format("opentype");
            }
          `}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
