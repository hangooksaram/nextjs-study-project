import '../styles/globals.css'
import '../styles/new-globals.css' //페이지 전체에 적용시키고 싶다면 그냥 여기에 import하면 끝
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
