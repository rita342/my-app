
import { Component } from "react";
import{Form,Button} from "react-bootstrap"

class AddComment extends Component{gi
    state={
        comments:{
            comment:"",
            rate: 1,
            elementId: null
        }
      
    }
    componentDidUpdate = (prevProps, prevState) => {
        console.log('something changed!')
        if(prevProps.asin !== this.props.asin){
            this.setState({
                comments:{
                    ...this.state.comments,
                    elementId: this.props.asin
                }
            })
        }

    }

    handleInput = async (e) =>{
        try {
            e.preventDefault();
            const response = await fetch(" https://striveschool-api.herokuapp.com/api/comments",{
                method:"POST",
                body: JSON.stringify(this.state.comments),
                headers:{
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjVlZDJkNTI2MjAwMTViNmRjOTQiLCJpYXQiOjE2MzMzNTEwMTksImV4cCI6MTYzNDU2MDYxOX0.DrqPyJFYhCjJf-U9yy0n00HYVIDAcLWKGPy7AvI9MyU",
                    "Content-type": 'application/json'
                }
            })
            if(response.ok){
                alert('Comments added successfully')
                
            }
        } catch (error) {
            console.log(error)
            
        }

    }

    render(){

        return(
            <div class="col" id="form">
           <Form onSubmit={this.handleInput}>
               <Form.Group >
                    
                    <Form.Control type="text" placeholder="add comment" 
                    value={this.state.comments.comment}
                    onChange={e =>this.setState({comments:{
                        ...this.state.comments,
                        comment:e.target.value
                    }
                })}
                     />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Rate</Form.Label>
                    <Form.Control as="select" value={this.state.comments.rate}
                    onChange={e =>this.setState({comments:{
                        ...this.state.comments,
                        rate:e.target.value
                    }
                })}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
               </Form.Group>
               <Button variant="success" type="submit">
                                Add
             </Button>
           </Form>
           </div>
        )
    }
}
export default AddComment
/*import { Component } from "react";
import { Button, Form } from 'react-bootstrap'

class AddComment extends Component {

    state = {
        comment: {
            comment: '',
            rate: 1,
            elementId: this.props.asin
        }
    }
    componentDidUpdate (prevProps){
        if(prevProps.asin !== this.props.asin){
            this.setState({
                comments:{
                    ...this.state.comments,
                    elementId: this.props.asin
                }
            })
        }

    }
    sendComment = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(this.state.comment),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjVlZDJkNTI2MjAwMTViNmRjOTQiLCJpYXQiOjE2MzMzNTEwMTksImV4cCI6MTYzNDU2MDYxOX0.DrqPyJFYhCjJf-U9yy0n00HYVIDAcLWKGPy7AvI9MyU'
                }
            })
            if (response.ok) {
                // the comment has been sent succesfully!!
                alert('Comment was sent!')
            } else {
                console.log('error')
                alert('something went wrong')
            }
        } catch (error) {
            console.log('error')
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.sendComment}>
                    <Form.Group>
                        <Form.Label>Comment text</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Add comment here"
                            value={this.state.comment.comment}
                            onChange={e => this.setState({
                                comment: {
                                    ...this.state.comment,
                                    comment: e.target.value
                                }
                            })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select" value={this.state.comment.rate}
                            onChange={e => this.setState({
                                comment: {
                                    ...this.state.comment,
                                    rate: e.target.value
                                }
                            })}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default AddComment*/