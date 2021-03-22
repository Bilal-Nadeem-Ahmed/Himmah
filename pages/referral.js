import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';


export default function Referral() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Covid 19 Referral</title>
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
      <div className='banner'>
        <div>
          <h1>Covid 19 Referral</h1>
          <br/>
          <p><b>Organisations, Families and Individuals</b></p>
        </div>
      </div>
      <div className='writing'>
        <h2>Covid-19 Referral for Organisations</h2>
        <br/>
        <p>Please note we are now working with most other food banks and your clients details maybe passed on to a food bank nearer to your client. This helps us all in cutting down time spent on the road and is more efficient for all the volunteers. Thank you</p>
        <br/>
        <h2>Individuals and Families Referral</h2>
        <br/>
        <p>If you are an individual or family requiring help please read below <b>Nottingham City Council</b> have now set up a system to help you.</p>
        <p>If you need help getting essential items e.g. picking up prescriptions or groceries please complete their <a href='https://www.nottinghamcity.gov.uk/coronavirus'><b>online form</b></a> or <a href='tel:01159155555'><b>call</b></a> the Customer Hub on 0115 915 5555 and one of their Council Officers will get in touch to request more information.</p>
      </div>
    
      </main>
      
     

      <footer className={styles.footer}>
   <Footer/>
      </footer>
    </div>
  )
}
