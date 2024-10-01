import { FilterContent } from "./FilterContent";
import { FilterItem } from "./FilterItem";

export const Filter = () => {
  return (
    <div className=" gap-20  grid grid-cols-1 mb-64  ">
      <FilterContent title="1. choisir un domaine">
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
      </FilterContent>
      <FilterContent title="1. choisir un sous domaine">
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
      </FilterContent>
    </div>
  );
};
