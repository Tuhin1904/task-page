// CommentForm.js
import React, { useState } from 'react';

function CommentForm({ onAddComment }) {
  const [commentText, setCommentText] = useState('');
  const [isCommentFormOpen, setCommentFormOpen] = useState(false);

  const handleCommentSubmit = () => {
    onAddComment(commentText);
    setCommentText('');
    setCommentFormOpen(false);
  };

  return (
    <div>
      <button className="dbutton" onClick={() => setCommentFormOpen(true)} style={{borderRadius:'25px',marginRight:'10px'}}>Add Comment</button>
      {isCommentFormOpen && (
        <div className="comment-form">
          <textarea
            placeholder="Write your comment in this box"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            style={{marginRight:'10px',marginTop:'10px',borderRadius:'25px',padding:'10px'}}
          />
          <button className="dbutton" onClick={handleCommentSubmit} style={{borderRadius:'25px',marginRight:'10px'}}>Submit</button>
          <button className="dbutton" onClick={() => setCommentFormOpen(false)} style={{borderRadius:'25px'}}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default CommentForm;
