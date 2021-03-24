import {Card, Button} from 'react-bootstrap'
const Race = () => {
    return ( 
        <div className='card-container'>
           <Card className="text-center" style={{ width: '23rem' }}>
                <Card.Img variant="top" src="/images/art1.jpg" />
                <Card.Body>
                <Card.Title>Photography club</Card.Title>
                <Card.Text>
                The Tasty Tuesday Photography clubs is a weekly get together for people interested in photography and visual arts.   
                </Card.Text>
                <Button style={{backgroundColor:'purple'}} variant="secondary">More Info</Button>
                </Card.Body>
          </Card>
          <Card className="text-center" style={{ width: '23rem' }}>
                <Card.Img variant="top"  src="/images/art.jpg" />
                <Card.Body>
                <Card.Title>Art and heritage</Card.Title>
                <Card.Text>
                We are experienced in working with arts, curators and producers to deliver arts events for Muslim communities.      
                </Card.Text>
                <Button style={{backgroundColor:'purple'}} variant="secondary">More Info</Button>
                </Card.Body>
          </Card>
          <Card className="text-center" style={{ width: '23rem' }}>
                <Card.Img variant="top" src="/images/sch.jpg" />
                <Card.Body >
                <Card.Title>Tackling racism and hate crime</Card.Title>
                <Card.Text>
                We have been working to tackle racism, and to build more informed BAME citizens through campaigning and education work.  
                </Card.Text>
                <Button  style={{backgroundColor:'purple'}} variant="secondary">More Info</Button>
                </Card.Body> 
          </Card>
        </div>
     );
}
 
export default Race;