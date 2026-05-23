function SingleComment({ comment }) {
  return (
    <div className="border-bottom py-2">
      <p className="mb-1">{comment.comment}</p>
      <small>Voto: {comment.rate}</small>
    </div>
  )
}

export default SingleComment