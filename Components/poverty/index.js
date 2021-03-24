import {Card, Button} from 'react-bootstrap'
const Poverty = () => {
    return ( 
        <div className='card-container'>
           <Card className="text-center" style={{ width: '23rem' }}>
                <Card.Img variant="top" src="/images/fb.jpg" />
                <Card.Body>
                <Card.Title>Foodbank</Card.Title>
                <Card.Text>
                Over the month of February we provided over a thousand meals through our Foodbank!  
                </Card.Text>
                <Button style={{backgroundColor:'purple'}} variant="secondary">More Info</Button>
                </Card.Body>
          </Card>
          <Card className="text-center" style={{ width: '23rem' }}>
                <Card.Img variant="top" style={{ height: '200px' }} src="/images/htmeal.jpg" />
                <Card.Body>
                <Card.Title>Salaam Shalom Kitchen</Card.Title>
                <Card.Text>
                This is a joint Muslim / Jewish project to provide free meals to people in Nottingham who may be struggling.    
                </Card.Text>
                <Button style={{backgroundColor:'purple'}} variant="secondary">More Info</Button>
                </Card.Body>
          </Card>
          <Card className="text-center" style={{ width: '23rem' }}>
                <Card.Img variant="top" src="/images/pantry.jpg" />
                <Card.Body >
                <Card.Title>Nottingham Peoples Pantry</Card.Title>
                <Card.Text>
                A place for those on low income to be able to purchase heavily discounted food.   
                </Card.Text>
                <Button  style={{backgroundColor:'purple'}} variant="secondary">More Info</Button>
                </Card.Body> 
          </Card>
        </div>
     );
}
 
export default Poverty;