

import Document, { DocumentProps, Html,Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document<DocumentProps>{
  render():JSX.Element{
    return(
      <Html>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      <Main/>
      <NextScript/>
    </Html>
    );
    
  }
}

export default MyDocument