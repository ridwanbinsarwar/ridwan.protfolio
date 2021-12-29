import React, { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export function AppContainer({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        <>
            <Head>
                <title>Portfolio Ridwan</title>
                <script async src="https://kit.fontawesome.com/708794bc61.js" crossOrigin="anonymous"></script>
            </Head>

            <div className="" id="body-root" style={{ minHeight: '100vh' }}>
                <div className="">{getLayout(<Component {...pageProps}></Component>)}</div>
            </div>
        </>
    );
}
