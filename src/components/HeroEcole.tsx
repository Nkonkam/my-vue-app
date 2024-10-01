import { LuSearch } from "react-icons/lu";

export const Hero = () => {
  return (
    <div className="py-[50px] px-5">
      <div>
        <h1 className="text-[32px] md:max-w-[840px] md:mx-auto sm:text-[62px] sm:leading-[77.5px] sm:-tracking-[1px]  text-center leading-10 text-gray-900  ">
          Trending web & landing page designs
        </h1>
        <h2 className="my-6 mx-[70px] md:max-w-[565px] md:mx-auto text-center text-sm sm:text-sm sm:leading-7 leading-7 text-gray-700 ">
          Explore trending Web Design, Responsive Design, User Experience and
          User Interfaces from popular design portfolios
        </h2>
      </div>
      <form className="max-w-[539px] relative m-auto ">
        <LuSearch className="h-4 w-4 absolute text-[#D3D2DF] top-5 left-[25px]"></LuSearch>
        <input
          className="py-7 h-[58px]  pr-[45px] pl-[55px] border border-[#D3D2DF] focus:outline-none rounded-full w-full "
          type="text"
          placeholder="Search"
        />
      </form>
    </div>
  );
};
