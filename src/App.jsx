import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import MyNav from "./MyNav"
import MyFooter from "./MyFooter"
import Welcome from "./Welcome"
import AllTheBooks from "./AllTheBooks"
import BookDetails from "./BookDetails"
import NotFound from "./NotFound"

function App() {
  const [search, setSearch] = useState("")

  return (
    <div>
      <MyNav search={search} setSearch={setSearch} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Welcome />
              <AllTheBooks search={search} />
            </>
          }
        />

        <Route
          path="/book/:asin"
          element={<BookDetails />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <MyFooter />
    </div>
  )
}

export default App