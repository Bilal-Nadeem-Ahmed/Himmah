import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

const style={
//   width:"600",
//  height:"600",
//  border:'0'

}

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
      <br/>
      <h1>Contact Us</h1>
      <br/>
        <div className='cont'>
          <div className='center'>
            <div>
            <h2>Find Us At:</h2>
            <p>Unit 2, Forest Court</p>
            <p>Gamble Street</p>
            <p>Nottingham</p>
            <p>NG7 4EX</p>
            <p><a href='tel:0115 871 4426'>Tel 0115 871 4426</a></p>
            <p><a href='mailto:info@himmah.org'>Email: info@himmah.org</a></p>
            </div>
          </div>
          <div className='center'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2403.400138125376!2d-1.1691622841761173!3d52.95921587989983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c1c411d27dcb%3A0xe85bdb7f95004ecd!2sHimmah%20Food%20bank!5e0!3m2!1sen!2suk!4v1616428131192!5m2!1sen!2suk"  height='400' width='400' allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </main>


      <footer className={styles.footer}>
   
      </footer>
    </div>
  )
}
