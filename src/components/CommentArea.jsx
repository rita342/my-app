import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'


class CommentArea extends Component {

    state = {
        comments: [], // comments will go here
        isLoading: true,
       
    }

    componentDidMount = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
                headers: {
                    Authorization: 'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjVlZDJkNTI2MjAwMTViNmRjOTQiLCJpYXQiOjE2MzMzNTEwMTksImV4cCI6MTYzNDU2MDYxOX0.DrqPyJFYhCjJf-U9yy0n00HYVIDAcLWKGPy7AvI9MyU'
                }
            })
            console.log(response)
            if (response.ok) {
                let comments = await response.json()
                this.setState({ comments: comments, isLoading: false, isError: false })
            }
        } catch (error) {
            console.log(error)
            this.setState({ isLoading: false, isError: true })
        }
    }

    render() {
        return (
            <div>
                {this.state.isLoading && <Loading />}
             
                <AddComment asin={this.props.asin} />
                <CommentList commentsToShow={this.state.comments} />
            </div>
        )
    }
}

export default CommentArea