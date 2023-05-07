import { useState } from "react"
import people from "./data"
import "./App.css"
import List from "./List"

const App = () => {
  const [person, setPerson] = useState(people)
  const [show, setShow] = useState(true)

  const restore = () => {
    setPerson(people)
    setShow(true)
  }

  const clear = () => {
    setPerson([])
    setShow(false)
  }
  return (
    <main>
      <section className="container">
        <h3>There are {person.length} Birthdays Today</h3>
        <List people={person} />

        {show ? (
          <button onClick={clear} className="btn btn-block">
            Clear All
          </button>
        ) : (
          <button onClick={restore} className="btn btn-block">
            Restore all
          </button>
        )}
      </section>
    </main>
  )
}

export default App
