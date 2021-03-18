import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';
import {Carousel} from 'react-bootstrap'

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
      </Head>

      <main className={styles.main}>
      <Navigation/>
      
      <div className ={'big'}></div>
      <div id='tacklingpoverty'>tackling poverty</div>
      <div id="salaamshalomkitchen"></div>
      <div id='tacklinghate'>tackling hate</div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/random/800x600"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/random/800x600"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/random/800x600"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </main>

      <footer className={styles.footer}>
       <Footer/>
      </footer>
    </div>
  )
}
