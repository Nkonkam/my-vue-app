import { AccordionContextProvider } from "../context/accordionContext";

export const Accordions = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <ul className={className}>
      <AccordionContextProvider>{children}</AccordionContextProvider>
    </ul>
  );
};
