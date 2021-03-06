import {Card, Button} from 'react-bootstrap';

const Cards = ({url}) => {
    return (
        <>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={url}/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">ver más</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Cards
