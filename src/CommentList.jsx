import SingleComment from './SingleComment';

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </div>
  )
}

export default CommentList