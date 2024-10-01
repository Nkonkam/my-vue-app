export const FilterContent = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="bg-zinc-100 p-[15px]   rounded-md   ">
      <div className="w-full font-bold text_zinc-400 mb-7">
        <h4>{title}</h4>
      </div>
      <div className="flex flex-wrap ">{children}</div>
    </div>
  );
};
