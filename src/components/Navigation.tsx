import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Navigation = () => {
  // STATES
  const [isDiplayBtnLeft, setIsDiplayBtnLeft] = useState<boolean>(true);
  const [isDiplayBtnRight, setIsDiplayBtnRight] = useState<boolean>(true);
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
      className=" relative mx-auto mb-8 max-w-[1020px]  overflow-hidden px-5 "
    >
      <div
        className={` ${
          isDiplayBtnLeft ? "block" : "hidden"
        } absolute  inset-y-0  left-0 z-10 flex w-5 items-center bg-gradient-to-l from-white `}
      >
        <button onClick={handlerClickbtnLeft}>
          <IoIosArrowBack></IoIosArrowBack>
        </button>
      </div>
      <ul
        ref={refscrollBox}
        onScroll={(event) => handlerScroll(event)}
        className="no-scrollbar flex h-full items-center  gap-5  overflow-x-auto scroll-smooth  bg-gradient-to-l from-white   "
      >
        <li className=" cursor-pointer  whitespace-nowrap rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
        <li className=" cursor-pointer whitespace-nowrap  rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
        <li className=" cursor-pointer  whitespace-nowrap rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
        <li className=" cursor-pointer  whitespace-nowrap rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
        <li className=" cursor-pointer  whitespace-nowrap rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
        <li className=" cursor-pointer  whitespace-nowrap rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
        <li className=" cursor-pointer  whitespace-nowrap rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
        <li className=" cursor-pointer  whitespace-nowrap rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
        <li className=" cursor-pointer  whitespace-nowrap rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
        <li className=" cursor-pointer  whitespace-nowrap rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
        <li className=" cursor-pointer  whitespace-nowrap rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
        <li className=" cursor-pointer  whitespace-nowrap rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
        <li className=" cursor-pointer  whitespace-nowrap rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
        <li className=" cursor-pointer  whitespace-nowrap rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
        <li className=" cursor-pointer  whitespace-nowrap rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
        <li className=" cursor-pointer  whitespace-nowrap rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
        <li className=" cursor-pointer  whitespace-nowrap rounded-3xl border bg-zinc-100/10 px-5 py-2  text-center text-[14px] font-semibold leading-5 text-gray-900 ">
          Brandign
        </li>
      </ul>
      <div
        className={` ${
          isDiplayBtnRight ? "block" : "hidden"
        }  absolute   inset-y-0 right-0  flex items-center justify-center bg-gradient-to-l from-white   `}
      >
        <button onClick={handlerClickbtnRigth}>
          <IoIosArrowForward></IoIosArrowForward>
        </button>
      </div>
    </div>
  );
};
