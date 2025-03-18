const Hero = () => {
  return (
    <div className = "flex-1 flex  w-screen ">
      <div className = "w-1/2 flex flex-col items-center justify-center ">
        <div className = " flex flex-col gap-y-8">
        <div className = "text-3xl flex flex-col gap-y-4">
          <div>
            <span>Hello I'am </span>
            <span className = "font-bold">Leonardo Timkang.</span>
          </div>
          <div>
            <span className = "font-bold">Fullstack </span>
            <span className = "">Developer</span>
          </div>
          <div>
            <span className = "">Based In </span>
            <span className = "font-bold">Philippines</span>
          </div>

        </div>
          <p className = "w-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus fermentum, nunc ac feugiat luctus, sapien neque elementum augue, sed cursus lorem odio at orci. Proin quis urna vel lorem interdum convallis. Donec malesuada justo id sapien tempus, eget tincidunt nunc varius.</p>

        </div>
      </div>

      <div className = "w-1/2">
        right
      </div>
    </div>
  )
}

export default Hero
