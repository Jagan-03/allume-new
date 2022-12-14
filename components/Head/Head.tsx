import React from 'react'
import Head from "next/head";

interface HeadProps 
{
    title: string;
}

const HeadComponent: React.FC<HeadProps> = (props) => {
  return (
    <Head>
        <title>{props.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadComponent;
