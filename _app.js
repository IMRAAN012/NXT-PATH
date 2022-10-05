import '/styles/globals.css'
import '/styles/layout.css'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  if(Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return(
    <>
      <Head>
        <title>ABOUT CODE</title>
        <meta name="HEAD COMPONENT" content="IMRAAN"/>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      
    </>
  )
}

export default MyApp
