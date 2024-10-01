export const Header = () => {
  return (
    <header
      className=" text-base  bg-white  h-[100px]  px-6 flex justify-between items-center 
  "
    >  
      <div className=" font-sans text-base leading-7 text-zinc-600 ">
        <span>YIBOLO</span>
      </div>
      <div className=" flex items-center gap-8 ">
        {/* <LuSearch className="w-5 h-5" /> */}

        <button className="font-semibold p-6 border borer-gray-900 text-white rounded-full  bg-gray-900 leading-[14px]">
          Sign up
        </button>
      </div>
    </header>
  );
};
