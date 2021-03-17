import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Components/Footer';
import Navigation from '../../Components/Nav';

export default function VirtualFoodDonation() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Himmah Virtual Food Donation</title>
        <link rel="icon" href="/favicon.ico" />
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
      </Head>

      <main className={styles.main}>
      <Navigation/>
      <div>this the virtualfoodbanddonation page</div>
      </main>

      <footer className={styles.footer}>
       <Footer/>
      </footer>
    </div>
  )
}
