import { Link } from "react-router-dom"

function SingleBook({ book, selected, setSelectedAsin }) {
  return (
    <div className="col-md-4 mb-3">
      <div
        className={`card h-100 ${
          selected ? "border border-danger border-3" : ""
        }`}
        onClick={() => setSelectedAsin(book.asin)}
      >
        <img
          src={book.img}
          className="card-img-top"
          alt={book.title}
          style={{
            height: "300px",
            objectFit: "cover",
          }}
        />

        <div className="card-body">
          <h5>{book.title}</h5>
          <p>{book.price} €</p>

          <Link
            to={`/book/${book.asin}`}
            className="btn btn-primary"
          >
            Dettagli
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SingleBook