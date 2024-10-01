import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const NavigationEcoleDetailDomaine = () => {
  // STATES
  const [isDiplayBtnLeft, setIsDiplayBtnLeft] = useState<Boolean>(true);
  const [isDiplayBtnRight, setIsDiplayBtnRight] = useState<Boolean>(true);
  const draggableRef = useRef<HTMLDivElement>(null);

  //REF
  const refscrollBox = useRef<HTMLUListElement>(null);

  // COMPORTEMENT
  const handlerScroll = (event: React.UIEvent<HTMLUListElement, UIEvent>) => {
    const { scrollLeft, scrollWidth, clientWidth } = event.currentTarget;

    scrollLeft < 0.8888888955116272 || scrollLeft == scrollWidth - clientWidth
      ? setIsDiplayBtnLeft(false)
      : setIsDiplayBtnLeft(true);

    console.log({
      scrollWidth,
      clientWidth,
      scrollLeft,
    });

    // scrollWith = clientWidth +  scrollLeft
    scrollLeft == scrollWidth - clientWidth
      ? setIsDiplayBtnRight(false)
      : setIsDiplayBtnRight(true);
  };

  const handlerClickbtnLeft = () => {
    // console.log(refscrollBox.current?.scrollLeft);

    if (refscrollBox.current) refscrollBox.current.scrollLeft += 150;
  };

  const handlerClickbtnRigth = () => {
    // console.log(refscrollBox.current?.scrollLeft);

    if (refscrollBox.current) refscrollBox.current.scrollLeft -= 100;
  };

  // RENDU
  return (
    <div
      ref={draggableRef}
      className="mb-6 border-b pb-4 border-stone-300 relative overflow-hidden "
    >
      {/* <div
        className={` ${
          isDiplayBtnLeft ? "block" : "hidden"
        } absolute  flex  w-5 items-center left-0 top-0 bottom-0 bg-gradient-to-l from-white   z-10 `}
      >
        <button onClick={handlerClickbtnLeft}>
          <IoIosArrowBack></IoIosArrowBack>
        </button>
      </div> */}
      <ul
        ref={refscrollBox}
        onScroll={(event) => handlerScroll(event)}
        className="flex gap-5 h-full scroll-smooth  items-center  overflow-x-auto no-scrollbar  bg-gradient-to-l from-white"
      >
        <li className=" cursor-pointer   py-2 px-5 font-semibold text-[14px] border-red-500 border rounded-3xl  leading-5 text-center whitespace-nowrap bg-zinc-100/10 text-red-500 ">
          description
        </li>

        <li className=" cursor-pointer transition-all  hover:text-red-500 hover:border-red-500 py-2 px-5 font-semibold text-[14px] border rounded-3xl  leading-5 text-center whitespace-nowrap bg-zinc-100/10 text-gray-900 ">
          Metier
        </li>

        <li className=" cursor-pointer  transition-all  hover:text-red-500 hover:border-red-500 py-2 px-5 font-semibold text-[14px] border rounded-3xl  leading-5 text-center whitespace-nowrap bg-zinc-100/10 text-gray-900 ">
          Entreprises ( Emplois/ Stages )
        </li>
      </ul>
      {/* <div
        className={` ${
          isDiplayBtnRight ? "block" : "hidden"
        }  absolute   flex justify-center  items-center right-0 top-0 bottom-0 bg-gradient-to-l from-white   `}
      >
        <button onClick={handlerClickbtnRigth}>
          <IoIosArrowForward></IoIosArrowForward>
        </button>
      </div> */}
    </div>
  );
};
