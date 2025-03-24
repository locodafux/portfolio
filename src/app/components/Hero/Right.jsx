const Right = ({ isMobile, Banner}) => {
    return (
      <div className={`${isMobile ? "w-screen h-[400px] " : "w-1/2 ml-[-250px]"} flex justify-center items-center`}>
        <Banner path="/Banner.png" alt="Image" className="w-full h-full object-cover" />
      </div>
    )
}

export default Right
