import React from "react"

export const Pagination = ({ prevPage, data, handlePage, nextPage, page }) => {
  const numbers = data.map((_, index) => (
    <button
      key={index}
      className={`page-btn ${index === page ? "active-btn" : null}`}
      onClick={() => handlePage(index)}
    >
      {index + 1}
    </button>
  ))

  return (
    <div className="btn-container">
      <button className="prev-btn" onClick={prevPage}>
        prev
      </button>
      {numbers}
      <button className="next-btn" onClick={nextPage}>
        next
      </button>
    </div>
  )
}
