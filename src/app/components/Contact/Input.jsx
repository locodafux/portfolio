const Input = (props) => {
  return <input type={props.type} className="h-[56px] w-[343px] lg:w-[500px] p-4 border-1 rounded-sm text-zinc-500 " value = {props.input} onChange = {props.onchange} placeholder={props.placeholder}/>
}

const TextArea = (props) => {
  return (
    <textarea className="h-[140px] w-[343px] lg:w-[500px] p-4 border-1 rounded-sm text-zinc-500 " onChange = {props.onchange} placeholder={props.placeholder} value={props.input} />
  )
}

export {
  Input,
  TextArea
} 
