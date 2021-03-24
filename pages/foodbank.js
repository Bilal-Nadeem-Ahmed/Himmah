import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';
import Chart from '../Components/chart';

export default function FoodBank() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Himmah Food Bank</title>
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
      
      <div className='topimg'>
        <h1 className='toptxt'>Himmah Foodbank</h1>
      </div>
   
    <br/>
      <Chart/>
      <div className='refcont'>
        <div className='refimg'></div>
        <div className='reftext'>
          <div>
            <h2>Referral Process</h2>
            <br/>
            <p>If you know of anyone who may require a food parcel please get them to contact one of the agencies below who will in turn contact us to make arrangements to get a parcel to them.</p>
            <p>Some of the agencies we work with include, Framework Nottingham, Law Centre, Metropolitan Housing, Notts City Homes, DWP, Citizen Advice Nottingham, NCC, British Red Cross, Notts Refuge Forum, and the British Legion</p>
            <p>The foodbank and referral agency use the voucher to gather some basic information to help us identify the causes of crisis, offer practical guidance and prepare suitable emergency food. </p>
            <p>If you are a referral agency please click <b><a href='/referral'>here</a></b></p>
            
          </div>
        </div>
        
      </div>
      <div>
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
      </div>
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}
