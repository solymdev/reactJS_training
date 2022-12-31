import React, { useState, useEffect } from "react"
import data from "./data"
import Article from "./Article"

const getStorageTheme = () =>
  localStorage.getItem("theme") ? localStorage.getItem("theme") : "light-theme"

function App() {
  const [theme, setTheme] = useState(getStorageTheme())

  const toggleTheme = () =>
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme")

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  const articles = data.map((item) => <Article key={item.id} {...item} />)

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">{articles}</section>
    </main>
  )
}

export default App
