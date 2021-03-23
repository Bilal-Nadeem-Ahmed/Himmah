import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';
import Cards from '../Components/Cards';




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Himmah Homepage</title>
        <link rel="icon" href="/favicon.ico" />
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
<style type="text/css">
    {`
    .red{
     
      color: red;
    }
    .green{
      color:green;
    }

    .purple {
      color:purple;

    }
    h1{
      font-size:4.7vw !important;
      text-shadow: 0px 0px 9px white;
    }
    .carousel img{
      height:75vh !important;
      width:auto !important;
    }
  
  
    `}
  </style>
      </Head>

      <main className={styles.main}>
      <Navigation/>
  
    <div className='intro'>
      <div>
      <h2>Himmah is a grass roots community-based initiative tackle poverty, mental wellbeing, racism and social exclusion. </h2>
      <br/>
      <h2>We do this through a combination of service provision, campaigning work, arts and education work and collaboration with individuals, communities and organisations. </h2>
      <br/>
      <h2>Through our work we can show we meet the needs and aspirations of Nottingham's wider community.</h2>
      </div>
    </div>
    <Cards/>
          <div className='red-bg'></div>
          <div id='tacklingpoverty'>tackling poverty</div>
      <div id="salaamshalomkitchen"></div>
      <div id='tacklinghate'>tackling hate</div>

         
      </main>

      <footer className={styles.footer}>
       <Footer/>
      </footer>
    </div>
  )
}
