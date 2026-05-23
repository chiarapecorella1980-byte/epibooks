import { useEffect, useState } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"

function CommentArea({ asin }) {
  const [comments, setComments] = useState([])

  const getComments = () => {
    if (asin) {
      fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTExZmRlYzUwODE5ZjAwMTU0MGU5MmEiLCJpYXQiOjE3Nzk1NjQwMTIsImV4cCI6MTc4MDc3MzYxMn0.vd7kBqaqVGK9Xf92tCuc_-RIwHDGuSKzxIN0TEIaKVI",
        },
      })
        .then((response) => response.json())
        .then((data) => setComments(data))
        .catch((error) => console.log(error))
    }
  }

  useEffect(() => {
    getComments()
  }, [asin])

  return (
    <div className="border rounded p-3 mt-4">
      <h4>Recensioni</h4>

      {asin ? (
        <>
          <CommentList comments={comments} />
          <AddComment asin={asin} getComments={getComments} />
        </>
      ) : (
        <p>Seleziona un libro per vedere i commenti.</p>
      )}
    </div>
  )
}

export default CommentArea