import type { NextPage } from 'next'
import Head from 'next/head'

import { NextSeo } from 'next-seo'

import {Flex, Heading} from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <div>
      <NextSeo 
        title="Project Title"
        description="Project description metatag"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description'
        }}/>

      <Head>
        <title>Home Page</title>
      </Head>

      <Flex>
        <Heading color="pink.500">Hello World</Heading>
      </Flex>
    </div>
  )
}

export default Home
