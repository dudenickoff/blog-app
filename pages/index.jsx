import React from 'react';
import Head from 'next/head';
import { BlogGrid } from '../src';

export default function Home() {
  const faviconUrl =
    process.env.NODE_ENV === 'production'
      ? '/blog-app/favicon.ico'
      : '/favicon.ico';
  return (
    <>
      <Head>
        <title>Blog app</title>
        <link rel="icon" href={faviconUrl} />
      </Head>

      <main>
        <BlogGrid />
      </main>
    </>
  );
}
