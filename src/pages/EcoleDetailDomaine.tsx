import { useState } from "react";
import { Filter } from "../components/Filter";
import { FilterNav } from "../components/FilterNav";
import { Header } from "../components/Header";
import { Hero } from "../components/HeroEcole";
import { Navigation } from "../components/Navigation";
import { Separation } from "../components/Separation";
import { HeroEcoleDetailDomaine } from "../components/HeroEcoleDetailDomaine";

export const EcoleDetailDomaine = () => {
  // SATETS
  const [isDisplayFilter, setIsDisplayFilter] = useState<Boolean>(true);

  // COMPORTEMENT

  // RENDU
  return (
    <>
      <Header></Header>
      <HeroEcoleDetailDomaine></HeroEcoleDetailDomaine>
    </>
  );
};
