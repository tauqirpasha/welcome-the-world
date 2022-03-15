import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="contact yonko" />
        <p className="description">
          8332942069 <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
