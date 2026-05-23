function MyNav({ search, setSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">
          📚 Epibooks
        </span>

        <div className="d-flex gap-3">
          <a href="#" className="text-light">Home</a>
          <a href="#" className="text-light">About</a>
          <a href="#" className="text-light">Browse</a>
        </div>

        <input
          className="form-control w-25"
          type="search"
          placeholder="Cerca libro..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </nav>
  )
}

export default MyNav