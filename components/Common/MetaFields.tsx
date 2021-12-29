import Head from 'next/head';
import React from 'react';

export function MetaFields({ title, MetaDescription, MetaKeywords, MetaTitle, ImageUrl, CanonicalTag }: { title?: string; MetaDescription?: string; MetaKeywords?: string; MetaTitle?: string; ImageUrl?: string; CanonicalTag?: string }) {
    return (
        <Head>
            <title>{MetaTitle || title}</title>
            {MetaDescription && <meta name="description" content={MetaDescription} />}
            {MetaKeywords && <meta name="keywords" content={MetaKeywords} />}
            {MetaTitle && <meta property="og:title" content={MetaTitle} />}
            {ImageUrl && <meta property="og:image" content={ImageUrl} />}
            {CanonicalTag && <link rel="canonical" href={CanonicalTag} />}
        </Head>
    );
}
