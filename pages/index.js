import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';
import Cards from '../Components/Cards';
import Chart from '../Components/chart';
import Poverty from '../Components/poverty';
import Race from '../Components/race';




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
    <br/>
    <h1>Food Delivered </h1>
    <br/>
    <Chart/>
    <br/>
    <h1>Our Work To Tackle Poverty</h1>
    <br/>
    <p className='desc'>
    Food poverty is ‘the inability to access or afford food to make up a healthy diet’. This can include quality as well as quantity of food. Food poverty is a complex issue and we play an important role to play in ensuring that no adult or child is distracted by hunger or poor nutrition, and that people from all communities have access to a healthy diet.
    </p>
    <Poverty/>
    <br/>
    <h1>Race, education, art and heritage</h1>
    <br/>
    <p className='desc'>
    Himmah is located in the heart of Hyson Green, one of the most poor and diverse communties in the East Midlands. Our work on poverty is complemented by anti-racist work. Our approach to anti racism is at different levels, challenging institutions, tackling race hate and Islamphobia, working to diversify education, art and education. We have a pluralistic approach working to engage the local people in different ways to tackling racism, sexism, social justice and equality. 
    </p>
    <Race/>

         
      </main>

      <footer className={styles.footer}>
       <Footer/>
      </footer>
    </div>
  )
}
