import { IoFilter } from "react-icons/io5";
import { SelectMenu } from "./SelectMenu";
export const FilterNav = () => {
  return (
    <div className=" mb-10 px-2   sm:px-[72px]  sm:pt-8 ">
      <div className=" flex  items-center gap-10">
        {/* <div>
          <button className="bg-dark whitespace-nowrap border-dark  border rounded-md gap-5 inline-flex items-center justify-center py-[9px] px-[9px]  text-[14px] font-medium text-gray-900 ">
            Button With Icon
            <div className="mr-[10px]">
              <IoIosArrowDown />
            </div>
          </button> 
        </div> */}

        <SelectMenu></SelectMenu>

        <button className="  inline-flex  items-center justify-center gap-1 whitespace-nowrap rounded-full border px-5 py-[9px]  text-[13px] font-medium text-gray-900 ">
          <div>
            <IoFilter />
          </div>
          Filter
        </button>
      </div>
    </div>
  );
};
