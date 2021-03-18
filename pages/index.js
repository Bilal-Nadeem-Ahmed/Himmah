import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';
import {Carousel} from 'react-bootstrap'
import Chart from '../Components/chart';

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
      height:60vh !important;
      width:auto !important;
    }
  
  
    `}
  </style>
      </Head>

      <main className={styles.main}>
      <Navigation/>
      
         
        <div className='purple-bg'>
              <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/fb.jpg"
              alt="First slide"
            />
            <Carousel.Caption >
            
            <h1 className='purple' >FoodBank</h1>
              
              
              
              
            
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/pantry.jpg"
              alt="The peoples pantry"
            />

            <Carousel.Caption>
              <h1 className='green'>The Nottingham People's Pantry</h1>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/covid.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 className='red'>Covid 19 Referral</h1>
              
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
          </div>
          <div className='red-bg'>
          <div id='tacklingpoverty'>tackling poverty</div>
      <div id="salaamshalomkitchen"></div>
      <div id='tacklinghate'>tackling hate</div>

          </div>
         <h1>Food Provided In Feb</h1>
            <Chart/>
         
      </main>

      <footer className={styles.footer}>
       <Footer/>
      </footer>
    </div>
  )
}
