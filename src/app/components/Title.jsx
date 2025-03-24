const Title = (props) => {
  return (
      <div className={`w-screen flex justify-center gap-x-3 ${ props.isDark && "text-white" }`}>
        <span className="text-5xl ">{props.first}</span> <span className = "text-5xl font-bold">{props.second}</span>
      </div>
  )
}

export default Title
