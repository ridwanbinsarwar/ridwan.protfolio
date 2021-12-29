import Document, { Html, Head, Main, NextScript } from 'next/document';
import * as React from 'react';

class CustomDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="stylesheet" href="//fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" />
                </Head>
                <body>
                    <section id="IE" style={{ display: 'none', padding: 10, textAlign: 'center', backgroundColor: '#ff0', position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 99999999 }}>
                        <div style={{ maxWidth: 1400, padding: '0 40px', margin: 'auto' }}>
                            <strong>WARNING:</strong> You are using an outdated browser. The app might not run well on it. Please update your browser, or use the latest version of any other browser, such as Chrome, Edge, FireFox or Safari.
                        </div>
                    </section>
                    <Main></Main>
                    <div id="portal"></div>
                </body>
                <NextScript></NextScript>
            </Html>
        );
    }
}

export default CustomDocument;
