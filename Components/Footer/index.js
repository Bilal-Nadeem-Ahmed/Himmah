import {Facebook,EnvelopeFill,TelephoneFill} from 'react-bootstrap-icons'
const Footer = () => {
    return ( 
        <div id='footer'>
            <div className='footeritems'>
            <a href='#'>Contact Us</a>
            <a href = 'https://www.facebook.com/wearehimmah/'><Facebook color='grey' size={30}/></a>
           <a href="mailto:info@himmah.org"><EnvelopeFill color='grey' size={30}/></a>
            <a href ='tel:01158714426'> <TelephoneFill color='grey' size={30}/></a>
           
            </div>

        </div>
     );
}
 
export default Footer;
