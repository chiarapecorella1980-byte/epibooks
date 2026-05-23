import { useParams } from "react-router-dom"
import fantasy from "./assets/data/fantasy.json"

function BookDetails() {
  const { asin } = useParams()

  const book = fantasy.find((book) => book.asin === asin)

  if (!book) {
    return <h2>Libro non trovato</h2>
  }

  return (
    <div className="container mt-4">
      <h2>{book.title}</h2>
      <img src={book.img} alt={book.title} style={{ width: "250px" }} />
      <p className="mt-3">Prezzo: {book.price} €</p>
      <p>Categoria: {book.category}</p>
    </div>
  )
}

export default BookDetails