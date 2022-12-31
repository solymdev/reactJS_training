import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Home from "./Home"
import Movie from "./SingleMovie"

function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home />} />
      <Route path="movies/:id" element={<Movie />} />
    </BrowserRouter>
  )
}

export default App
