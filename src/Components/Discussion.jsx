import React,{useState} from 'react'
import './Discussion.css';
import CommentForm from './Comment';

function Discussion() {
  const[comments,setComments]=useState([])
  const handleAddComment = (comment) => {
    setComments([...comments, comment]);
  };
  return (
    <div>
      <div className='topD'>
        <h2>Discussion</h2>
        <ol >{comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
        </ol>
        <CommentForm onAddComment={handleAddComment} />
      </div>
      <div className='midD'>
      <img src="https://app.pepcorns.com/assets/img/145.svg" alt="Nothing to show"/>
      <h4>No Comments Found. Be the first one to comment!</h4>
      </div>
    </div>
  )
}

export default Discussion