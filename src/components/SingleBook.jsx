import { Card} from "react-bootstrap";

const SingleBook= (props) => {
  return (
   
    <Card style={{width:200}}>
  <Card.Img variant="top" src={props.book.img} />
  <Card.Body>
    <Card.Title>{props.book.title}</Card.Title>
    <Card.Text>
    {props.book.price}
    </Card.Text>
  
  </Card.Body>
</Card>
      
    
  );
};

export default SingleBook;