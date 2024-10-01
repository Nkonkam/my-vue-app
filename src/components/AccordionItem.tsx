import React, { useRef } from "react";
import { LuChevronDown } from "react-icons/lu";
import { useAccordionContext } from "../context/accordionContext";

export const AccordionItem = ({
  children,
  value,
  trigger,
}: {
  children: React.ReactNode;
  value: number;
  trigger: string;
}) => {
  const { selected, setSelected } = useAccordionContext();
  const open = selected === value;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <li>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className={` flex ${
          open ? "text-[#5751E1]" : "text-[#6D6C80]"
        } justify-between items-center p-4 font-medium border-b border-[#B2BBCC] `}
      >
        {trigger}
        <LuChevronDown
          className={`transition-transform  w-5 h-5 ${
            open ? "rotate-180" : "" 
          }`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all "
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4 " ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
};
