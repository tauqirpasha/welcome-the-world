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
          +918332942069
        </p>
      </main>

      <Footer />
    </div>
  )
}
