import SingleBook from "./SingleBook";
import React from "react";
import { Container, Row, Col,Form} from "react-bootstrap";


class BookList extends React.Component {
  state= {
    searchQuery: ''
  }
  render() {
    return(
      <Container>
<Row>
  <Col>
  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" placeholder="Seach" 
    value={this.state.searchQuery} 
    onChange={e=>this.setState({searchQuery:e.target.value})} />
  </Form.Group>
 
</Form>
  </Col>
  </Row>


      <Row className="row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchQuery)).map(b => (
           <Col>
         < SingleBook book=
         {b}/>
        
         </Col>
          )
          )
         }
      </Row>
    </Container>
    )
  }
}
 



export default BookList;