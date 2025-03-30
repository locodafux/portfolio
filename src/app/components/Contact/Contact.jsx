import Left from "./Left"
import Right from "./Right"

const Contact = (props) => {
  return (
    <div id={props.id} className="flex flex-col lg:flex-row min-h-screen  w-screen p-8 lg:p-24 justify-around">
      <Left />
      <Right />
    </div>
  )
}

export default Contact
