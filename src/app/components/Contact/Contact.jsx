import Left from "./Left"
import Right from "./Right"

const Contact = (props) => {
  return (
    <div id={props.id} className="flex min-h-screen  w-screen p-24 justify-around">
      <Left />
      <Right />
    </div>
  )
}

export default Contact
