import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';

export default function TastyTuesday() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Himmah Tasty Tuesday Photography Club</title>
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
      <div className='ttbanner'>
        <h1 className='tttext'>Tasty Tuesday Photography club</h1>
      </div>
      <br/>
      <div className='ttcontent'>
        <p>The Tasty Tuesday Photography clubs is a weekly get together for people interested in photography and visual arts. Normally it run every Tuesday just before the weekly communal meals. However since the COVID 19 restrictions this has had to move online. </p>

        <h3>Summer 2020 Program</h3>
        <br/>
        <p>From July 2020 we have teamed up with photographer Jagdish Patel to run a summer program leading towards a publication in November 2020. This will consist of a series of 9 workshops to help people produce a body of work (between 2-5 images) which will be published in a printed publication.. These workshops will help you think about out how you PLAN, MAKE and SHARE your work with others through one-to-one tutorials and weekly peer reviews. </p>
        <p>This work is supported by the Arts Council and Nottingham Photographer's’ Hub. </p>
        <br/>
        <h2>Information about the workshops</h2>
        <br/>
        <p>We are running a series of 9 workshops to help participants produce a body of work (between 2-5 images) which will be published in a printed  publication later in the year. Our intention is to help you think about out how you PLAN, MAKE and SHARE your work with others through one-to-one tutorials and peer reviews.  </p>
        <p>Whilst the focus of the workshops is on photography, we encourage and support other visual arts approaches for these workshops.</p>
        <br/>
        <h3>This is what  we’re offering:</h3>
        <br/>
        <ul>
          <li>A free, weekly peer online group for BAME people interested in visual arts who wish to discuss and further their photographic practice. </li>
          <li>One-to-one tuition with industry professionals.</li>
          <li>An opportunity to learn more about planning, making and sharing your work. </li>
          <li>The opportunity to have work published and exhibited.</li>
        </ul>
        <br/>
        <p>The focus of these workshops are to help you creatively respond to COVID 19 and its implications on BAME communities in the Midlands. </p>
        <p>How you respond and the work you make will be defined by you and the wider group. We will encourage the group to take and make decisions relevant to their lived experiences - our aim is to support you in those choices.</p>
        <br/>
        <h3>Prerequisites:</h3>
        <br/>
        <p>All workshop participants must be over 18, have access to a cameraphone, or camera and have internet access. The workshop will be taking place on zoom. This is free software. There maybe opportunities to meet together, or get one to one mentoring  but this will depend on COVID-19 restrictions and health and safety recommendation. </p>
        <br/>
        <br/>
        <p><b>The workshops begin in July 2020 and end in September 2020. The publication will be launched in November 2020. </b></p>
        <br/>
        <p><a href='/contactus'>Contact us</a> for more Information</p>
      </div>
      </main>

      <footer className={styles.footer}>
       <Footer/>
      </footer>
    </div>
  )
}
