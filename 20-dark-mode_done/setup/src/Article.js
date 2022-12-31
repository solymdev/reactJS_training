import React from "react"
import moment from "moment"

const Article = ({ title, snippet, date, length }) => {
  const time = moment(date).format("dddd Do, YYYY")

  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{time}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article
