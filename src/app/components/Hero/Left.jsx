const Left = ({ isMobile }) => {
    return (
      <div className={`${isMobile ? "w-screen px-18 justify-center" : "w-1/2 p-24 mt-24"} flex flex-col items-center`}>
        <div className="flex flex-col gap-y-8">
          <div className={`${ isMobile ? "text-3xl items-center" : "text-5xl"} flex flex-col gap-y-4`}>
            <div>
              <span>Hello I am </span>
              <span className="font-bold">Leonardo Timkang.</span>
            </div>
            <div>
              <span className="font-bold">Fullstack </span>
              <span>Developer</span>
            </div>
            <div>
              <span>Based In </span>
              <span className="font-bold">Philippines</span>
            </div>
          </div>
          <p className="w-full text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
            Vivamus fermentum, nunc ac feugiat luctus, sapien neque elementum augue, 
            sed cursus lorem odio at orci. Proin quis urna vel lorem interdum convallis.
            Donec malesuada justo id sapien tempus, eget tincidunt nunc varius.
          </p>
        </div>
      </div>
    );
  };

  export default Left;