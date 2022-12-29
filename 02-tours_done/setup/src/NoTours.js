import React from "react"
import PropTypes from "prop-types"

export const NoTours = ({ fetchTours }) => {
  return (
    <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={() => fetchTours()}>
          refresh
        </button>
      </div>
    </main>
  )
}

NoTours.propTypes = {
  fetchTours: PropTypes.func.isRequired,
}

export default NoTours
