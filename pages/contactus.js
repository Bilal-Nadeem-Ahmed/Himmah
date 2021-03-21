import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
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
        <div className='cont'>
          <div className='center'>
            <div>
            <h1>Find Us At:</h1>
            <p>Unit 2, Forest Court</p>
            <p>Gamble Street</p>
            <p>Nottingham</p>
            <p>NG7 4EX</p>
            <p><a href='tel:0115 871 4426'>Tel 0115 871 4426</a></p>
            <p><a href='mailto:info@himmah.org'>Email: info@himmah.org</a></p>
            </div>
          </div>
          <div className='center'>
            <p>there will be maps here</p>
          </div>
        </div>
      </main>


      <footer className={styles.footer}>
   
      </footer>
    </div>
  )
}
