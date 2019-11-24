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
          <style>{`
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
              min-height: 100vh;
            }
            html body {
              background-size: cover;
              font-size: 14px;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              min-height: 100vh;
            }
            html body a,
            html body a:active,
            html body a:hover {
              cursor: pointer;
              text-decoration: none;
            }
            html body iframe {
              border: 0;
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
