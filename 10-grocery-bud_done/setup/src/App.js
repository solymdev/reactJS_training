import React, { useState, useEffect } from "react"
import List from "./List"
import Alert from "./Alert"
import { getLocalStorage } from "./Storage"
import { generateID } from "./utils"

const MSG = {
  DANGER: "danger",
  SUCCESS: "success",
}

const TYPE = {
  ENTER_VALUE: "please enter value",
  VALUE_CHANGED: "value changed",
  ADDED_TO_LIST: "item added to the list",
  EMPTY_LIST: "empty list",
  ITEM_REMOVED: "item removed",
}

function App() {
  const [name, setName] = useState("")
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, MSG.DANGER, TYPE.ENTER_VALUE)
      return
    }
    if (name && isEditing) {
      setList(
        list.map((item) =>
          item.id === editID ? { ...item, title: name } : item
        )
      )
      setName("")
      setEditID(null)
      setIsEditing(false)
      showAlert(true, MSG.SUCCESS, TYPE.VALUE_CHANGED)
      return
    }
    showAlert(true, MSG.SUCCESS, TYPE.ADDED_TO_LIST)
    const newItem = { id: generateID, title: name }
    setList([...list, newItem])
    setName("")
  }

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg })
  }

  const clearList = () => {
    showAlert(true, MSG.DANGER, TYPE.EMPTY_LIST)
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, MSG.DANGER, TYPE.ITEM_REMOVED)
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
