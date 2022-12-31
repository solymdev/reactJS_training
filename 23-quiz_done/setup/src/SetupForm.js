import React from "react"
import { useGlobalContext } from "./context"

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext()

  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>setup quiz</h2>
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>

          {<Category quiz={quiz} handleChange={handleChange} />}

          {<Difficulty quiz={quiz} handleChange={handleChange} />}

          {error && <Errors />}

          <button type="submit" onClick={handleSubmit} className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  )
}

const Category = ({ quiz, handleChange }) => (
  <div className="form-control">
    <label htmlFor="category">category</label>
    <select
      name="category"
      id="category"
      className="form-input"
      value={quiz.category}
      onChange={handleChange}
    >
      <option value="sports">sports</option>
      <option value="history">history</option>
      <option value="politics">politics</option>
    </select>
  </div>
)

const Difficulty = ({ quiz, handleChange }) => (
  <div className="form-control">
    <label htmlFor="difficulty">select difficulty</label>
    <select
      name="difficulty"
      id="difficulty"
      className="form-input"
      value={quiz.difficulty}
      onChange={handleChange}
    >
      <option value="easy">easy</option>
      <option value="medium">medium</option>
      <option value="hard">hard</option>
    </select>
  </div>
)

const Errors = () => (
  <p className="error">
    can't generate questions, please try different options
  </p>
)

export default SetupForm