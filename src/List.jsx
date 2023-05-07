import Person from "./Person"

const List = ({ people }) => {
  return (
    <section>
      {people.map((details) => {
        return <Person key={details.id} {...details} />
      })}
    </section>
  )
}

export default List
