import {Card, Button} from 'react-bootstrap'
const Cards = () => {
    return ( 
        <div className='card-container'>
           <Card className="text-center" style={{ width: '23rem' }}>
                <Card.Img variant="top" src="/images/fb.jpg" />
                <Card.Body>
                <Card.Title>Foodbank</Card.Title>
                <Card.Text>
                Over the month of February we provided over a thousand meals through our Foodbank!  
                </Card.Text>
                <Button href='/foodbank' style={{backgroundColor:'purple'}} variant="secondary">More Info</Button>
                </Card.Body>
          </Card>
          <Card className="text-center" style={{ width: '23rem' }}>
                <Card.Img variant="top" style={{ height: '200px' }} src="/images/covid.jpg" />
                <Card.Body>
                <Card.Title>Covid-19 Crisis Referral</Card.Title>
                <Card.Text>
                 A page with  links for organisations referring their clients to us   
                </Card.Text>
                <Button href='/referral' style={{backgroundColor:'purple'}} variant="secondary">More Info</Button>
                </Card.Body>
          </Card>
          <Card className="text-center" style={{ width: '23rem' }}>
                <Card.Img variant="top" src="/images/pantry.jpg" />
                <Card.Body >
                <Card.Title>Nottingham Peoples Pantry</Card.Title>
                <Card.Text>
                A place for those on low income to be able to purchase heavily discounted food.   
                </Card.Text>
                <Button href='https://www.nottinghampeoplespantry.org/' style={{backgroundColor:'purple'}} variant="secondary">More Info</Button>
                </Card.Body> 
          </Card>
        </div>
     );
}
 
export default Cards;