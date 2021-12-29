import 'styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { AppContainer } from '@/components/Common';

function Portfolio({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <AppContainer router={router} Component={Component} pageProps={pageProps}></AppContainer>
        </>
    );
}

export default Portfolio;
