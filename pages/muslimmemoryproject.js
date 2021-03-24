import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';


export default function MuslimMemoryProject() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Muslim Memory Project</title>
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
      <div className='mmpimg'><div className='mmptxt'>
        <h1>
        Muslim Memory Project
          </h1>
          <p>Charting the story of Muslim soldiers in the Great Wars</p></div></div>
          <div className='ttcontent'>
            <br/>
            <p>In August 2018 Himmah received funding from Heritage Lottery to document the lives of Muslim War veterans from Nottingham. Their contribution to Nottingham is immense, yet few people know about the contribution of Nottingham's Muslim community to the war effort, and our research shows that younger Muslim people and wider community in Nottingham do not have access to these stories. We have therefore created this archive to ensure that future generations do not miss out on a significant part of their local history. This local story is part of a much wider global story which encompasses events in Britain, India, Pakistan, Kashmir and across Africa. </p>
            <br/>
            <p>Millions of Muslim soldiers and civilians were recruited to the British Army from Asia and Africa during the two World Wars. These wars were global events, and although the role of black and Asian soldiers was widely reported, after the wars ended their presence disappeared from the public gaze. </p>
            <br/>
            <p>This is perhaps a reason why society at large assumes that black and Asian people arrived in the UK after war ended, rather than when the Empire began.</p>
            <br/>
           
            <p>During 2018, with the assistance of the Heritage Fund, we documented the heritage of Muslim War veterans, and their families.</p>
            <br/>
            <p>The Empire was multicultural, and the battlefields reflected this reality. During wartime, soldiers from different parts of India, Africa, and the Caribbean met for the first time. Black and Asian colonial subjects sat alongside young white working class men from Europe, and they talked as equals. </p>
            
            <br/>
            <p><b>The Senegalese film maker Sembene Ousmane, who served in the French colonial army during 1944-46 once wrote, ‘In the army we saw those who considered themselves our masters, naked, in tears, some cowardly or ignorant…When a white soldier asked me to write a letter for him, it was a revelation – I thought all Europeans knew how to write. The war demystified the coloniser; the veil fell.’ (Fighting for Britain: African Soldiers in the Second World War, Killingrey and Plaut 2012)</b></p>
            <br/>
            <p>In this project we are collecting the stories of local (East Midlands) families who were affecting by the Second World War.  As part of the project we are held a exhibition at the New Art Exchange, Nottingham.  In the exhibition, we examine the period of the two Great Wars, and attempt to contextualise the Eurocentric war narrative within a broader black and Asian history. </p>
            <br/>
         
            <p><b>The process of public remembrance, through memorials, books, films and paintings, has  created a national narrative without the presence of  black and Asian soldiers, not only in this country, but also in many of the former colonies. </b></p>
            <br/>
           
            <p><b>A better sense of a shared global history is imperative if we want to understand each other. </b></p>
            <br/>
          
            <p><b>At the end of the Second  World War, Germany, India, Palestine and West Africa, would be partitioned and most political boundaries across Europe, Asia, Africa and the Middle East would be altered.</b></p>
            <br/>
            <p><b>In this process, millions of people died or were forcibly displaced, and this legacy continues to the present day. </b></p>
            <br/>
            <br/>
            <p>Artists Jagdish Patel and Farida Makki have been worked with local families to explore the connections between Nottingham’s Muslim community and the wider war narrative. In this exhibition we use personal memory, maps, photographs, and archival material to pose questions about the process of war memorialisation, empire, and its interconnections to our present-day identities.</p>
            <p><a href='http://www.nae.org.uk'>More details here..</a></p>
          </div>
      </main>


      <footer className={styles.footer}>
      <Footer/>
      </footer>
    </div>
  )
}
