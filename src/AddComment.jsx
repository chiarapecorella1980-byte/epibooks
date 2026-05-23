import { useState } from "react"

function AddComment({ asin, getComments }) {
  const [comment, setComment] = useState("")
  const [rate, setRate] = useState("1")

  const sendComment = async (e) => {
    e.preventDefault()

    await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify({
        comment,
        rate,
        elementId: asin,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTExZmRlYzUwODE5ZjAwMTU0MGU5MmEiLCJpYXQiOjE3Nzk1NjQwMTIsImV4cCI6MTc4MDc3MzYxMn0.vd7kBqaqVGK9Xf92tCuc_-RIwHDGuSKzxIN0TEIaKVI",
      },
    })

    setComment("")
    setRate("1")
    alert("Recensione inviata!")
    getComments()
  }

  return (
    <form className="mt-3" onSubmit={sendComment}>
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Scrivi una recensione"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <select
        className="form-select mb-2"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button className="btn btn-primary" type="submit">
        Invia
      </button>
    </form>
  )
}

export default AddComment