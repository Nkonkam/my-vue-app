import { useState } from "react";
import { Filter } from "../components/Filter";
import { FilterNav } from "../components/FilterNav";
import { Header } from "../components/Header";
import { Hero } from "../components/HeroEcole";
import { Navigation } from "../components/Navigation";
import { Separation } from "../components/Separation";

export const Ecoles = () => {
  // SATETS
  const [isDisplayFilter, setIsDisplayFilter] = useState<Boolean>(true);

  // COMPORTEMENT

  // RENDU
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Navigation></Navigation>
      <FilterNav></FilterNav>
      <Separation></Separation>
      <div className="px-10 ">{isDisplayFilter && <Filter></Filter>}</div>
    </>
  );
};
