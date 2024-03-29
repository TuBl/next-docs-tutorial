import Link from 'next/link'
import Head from 'next/head'
import ImageComponent from '../../components/image';
import Layout from '../../components/layout'
export default function FirstPost() {
  return (
    <Layout>
    <Head>
        <title>First post</title>
    </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <ImageComponent></ImageComponent>
    </Layout>
  )
}