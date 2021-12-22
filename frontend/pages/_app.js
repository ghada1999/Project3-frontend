import 'bootstrap/dist/css/bootstrap.css';
//عشان يكون اقوى 
import '../styles/globals.css'

import Layout from "../components/Layout";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
