const Left = ({ isMobile }) => {
  return (
    <div
      className={`${
        isMobile ? "w-screen px-18 justify-center" : "w-1/2 p-24 mt-24"
      } flex flex-col items-center`}
    >
      <div className="flex flex-col gap-y-8">
        <div
          className={`${
            isMobile ? "text-3xl items-center" : "text-5xl"
          } flex flex-col gap-y-4`}
        >
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
        <p className="w-full text-gray-500 md:max-w-xl">
          As a full stack developer, I focus on constructing robust and
          user-centric web applications. My expertise encompasses both the
          creation of intuitive front-end interfaces and the development of
          efficient back-end systems. I am dedicated to delivering solutions
          that are not only functional but also provide a seamless user
          experience, and I continually strive to expand my knowledge in
          emerging web technologies.
        </p>
      </div>
    </div>
  );
};

export default Left;
