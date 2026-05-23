import { useState } from "react"
import fantasy from "./assets/data/fantasy.json"
import SingleBook from "./SingleBook"
import CommentArea from "./CommentArea"

function AllTheBooks({ search }) {
  const [selectedAsin, setSelectedAsin] = useState(null)

  const filteredBooks = fantasy.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container mt-4">
      <h2>I nostri libri 📚</h2>

      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {filteredBooks.map((book) => (
              <SingleBook
                key={book.asin}
                book={book}
                selected={selectedAsin === book.asin}
                setSelectedAsin={setSelectedAsin}
              />
            ))}
          </div>
        </div>

        <div className="col-md-4">
          <CommentArea asin={selectedAsin} />
        </div>
      </div>
    </div>
  )
}

export default AllTheBooks