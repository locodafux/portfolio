const CustomButton = ({children}) => {
  return (
    <button className="text-lg font-bold bg-gray-900 text-white p-4 flex items-center gap-x-2 hover:text-gray-900 hover:bg-white transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="24"
        height="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M5 20h14v-2H5v2zm7-18v12l4-4h-3V4h-2v6H8l4 4V2z" />
      </svg>
      {children}
    </button>
  )
}

const LinkButton = ({children}) => {
  return(
    <button className="text-lg bg-black text-white h-14 p-4  font-bold rounded-sm">{children}</button>
  )
}

const SocialLink = ({children, isDark}) => {
  return (
    <button className={`${ isDark ? "bg-black" : "border-1" } w-[56px] h-[56px] rounded-sm`}>{children}</button>
  )  
} 

export {
  CustomButton,
  LinkButton,
  SocialLink
};

