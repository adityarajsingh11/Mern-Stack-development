import { useState } from "react"
import "./Comment.css";
import CommentsForm from "./CommentsForm";


function Comment() {
    let [comments , setComments] = useState([
        {
          username:"@adi",
          remarks:"great job!",
          rating:4,
        }
])

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments,comment]);
    }

  return (
    <>
      <div className="comments-container">
        <h3>All Comment</h3>
        {comments.map((comment , idx) => (
            <div className="comment" key ={idx}>
                &nbsp;
                <span>(rating = {comment.rating})</span>
                <p>-{comment.username}</p>
            </div>
        ))}
      </div>  
        <hr></hr>
        <CommentsForm addNewComment= {addNewComment} />
    </>
    
  )
}

export default Comment