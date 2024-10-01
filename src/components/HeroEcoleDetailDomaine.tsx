import { IoIosArrowForward, IoMdDownload } from "react-icons/io";
import { NavigationEcoleDetailDomaine } from "./NavigationEcoleDetailDomaine";


import siantouImage from "../assets/image siantou.jpg";

export const HeroEcoleDetailDomaine = () => {
  return (
    <div className="px-5 py-[50px]"> 
      {/* HEADER HERO */}
      <div>
        <h1 className="text-center text-[32px] leading-10 text-gray-900 sm:text-[62px] sm:leading-[77.5px]  sm:tracking-[1px] md:mx-auto md:max-w-[840px]  ">
          INSTITUT UNIVERSITAIRE SIANTOU
        </h1>
        <h2 className="mx-[70px] my-6 text-center text-sm leading-7 text-gray-700 sm:text-sm sm:leading-7 md:mx-auto md:max-w-[565px] ">
          Explore trending Web Design, Responsive Design, User Experience and
          User Interfaces from popular design portfolios
        </h2>
      </div>

      <div className=" sm:grid sm:grid-cols-2 sm:gap-12">
        {/* BLOC RIGTH  */}
        <div className="px-3 pb-6 pt-0">
          <div className="mx-0 mb-12 mt-0 px-0 pb-0 pt-4">
            <div className="h-96">
              <img className="size-full" src={siantouImage} alt="" />
            </div>
            <h2 className="my-10 text-center text-[25.5px]  font-bold  tracking-[2px] text-red-600 ">
              Technologie du génie électrique : Réseaux et télécommunications
            </h2>

            {/* NAVIGATION */}
            <NavigationEcoleDetailDomaine></NavigationEcoleDetailDomaine>

            {/* DESCRIPTION */}
            <div className="mb-12">
              <h2 className="mb-3 text-lg font-bold uppercase tracking-[1.1px] text-red-600 ">
                Description
              </h2>
              <h3 className="mb-3 mt-[19px] text-base font-bold leading-6 ">
                Devenez spécialiste des technologies de l'information!
              </h3>
              <div>
                <p className="text-[14px] font-medium leading-[23.8px] text-neutral-600 ">
                  Les technologies de l’information n’auront plus de secrets
                  pour vous! Grâce à ce DEC complètement renouvelé, apprenez à
                  améliorer la connectivité Internet, à concevoir des réseaux
                  sans fil et à créer des réseaux cellulaires performants.
                  Développez des compétences parmi les plus recherchées par les
                  employeurs dans le monde connecté d'aujourd'hui et de demain.
                </p>
              </div>
            </div>

            {/* VIDEO */}
            <div className=" relative mb-12 h-96 bg-slate-600">
              <div className="  size-full ">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/nDGA3km5He4?si=1UUSTtT_y2EEVtfu"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* BlOC  BOURSE  */}
            <div className="mb-10">
              <div className="border-t-4 border-black bg-neutral-200 p-4 text-neutral-600">
                <h3 className="mb-3 text-lg font-bold uppercase tracking-[1.1px] text-red-600">
                  Bourses
                </h3>

                <div className=" relative ">
                  <p className="absolute  top-[4.5px] text-red-500 ">
                    <IoIosArrowForward></IoIosArrowForward>
                  </p>
                  <p className="pl-8 text-[14px] font-medium leading-[23.8px]">
                    Népal Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Sunt aliquid dicta minima libero fugiat, doloremque
                    eius, voluptas mollitia omnis hic sint illo pariatur. Ab,
                    sunt iste? Incidunt optio tempore nesciunt.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <div className=" p-4 text-neutral-600">
                <h3 className="mb-3 text-lg font-bold uppercase tracking-[1.1px] text-red-600">
                  Pourquoi choisir INSTITUT UNIVERSITAIRE SIANTOU?
                </h3>

                <div className="relative mb-5 flex items-center gap-4">
                  <p className="absolute top-0 font-bold text-black">1.</p>
                  <p className="pl-8 text-[14px] font-medium leading-[23.8px]">
                    Le seul cégep de la grande région de Québec à offrir ce
                    programme!
                  </p>
                </div>
                <div className="relative mb-5 flex items-center gap-4">
                  <p className="absolute top-0 font-bold text-black">2.</p>
                  <p className="pl-8 text-[14px] font-medium leading-[23.8px]">
                    L’utilisation d’un ordinateur portable pour tous les cours,
                    ce qui permet une pédagogie nouvelle avec des périodes
                    d’expérimentation plus nombreuses.
                  </p>
                </div>
                <div className="relative mb-5 flex items-center gap-4">
                  <p className="absolute top-0 font-bold text-black">3.</p>
                  <p className="pl-8 text-[14px] font-medium leading-[23.8px]">
                    Des projets chaque session, des activités, des concours et
                    une formation en contact étroit avec l’industrie.
                  </p>
                </div>
              </div>
            </div>

            {/* TEMOIGNAGE */}
            <div>
              <div></div>
            </div>

            {/* BlOC  PROGRAMME SIMILAIRE  */}
            <div className="mb-10">
              <div className="  p-4 text-neutral-600">
                <h3 className="mb-3 text-lg font-bold uppercase tracking-[1.1px] text-red-600">
                  Programmes similaires
                </h3>

                <div className=" relative ">
                  <p className="absolute  top-[4.5px] text-red-500 ">
                    <IoIosArrowForward></IoIosArrowForward>
                  </p>
                  <p className="pl-8 text-[14px] font-medium leading-[23.8px]">
                    Népal Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Sunt aliquid dicta minima libero fugiat, doloremque
                    eius, voluptas mollitia omnis hic sint illo pariatur. Ab,
                    sunt iste? Incidunt optio tempore nesciunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOC LEFT */}
        <div>
          {/* INFORMATION GENERALE  */}
          <div>
            <div>
              <div className="mb-10">
                <h3 className="mb-3 text-lg font-bold uppercase tracking-[1.1px] text-red-600">
                  Informations générales
                </h3>
                <div className="border-t-4 border-black bg-neutral-200 p-4 text-neutral-600">
                  <div className="mb-10">
                    <div>
                      <h4 className=" font-bold text-black">Début </h4>
                      <div className=" relative ">
                        <p className="absolute  top-[4.5px] text-red-500 ">
                          <IoIosArrowForward></IoIosArrowForward>
                        </p>
                        <p className="pl-8 text-[14px] font-medium leading-[23.8px]">
                          Automne 2025
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-10">
                    <div>
                      <h4 className=" font-bold text-black">Début </h4>
                      <div className=" relative ">
                        <p className="absolute  top-[4.5px] text-red-500 ">
                          <IoIosArrowForward></IoIosArrowForward>
                        </p>
                        <p className="pl-8 text-[14px] font-medium leading-[23.8px]">
                          Automne 2025
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-10">
                    <div>
                      <h4 className=" font-bold text-black">Préalables </h4>
                      <div className=" relative ">
                        <p className="absolute  top-[4.5px] text-red-500 ">
                          <IoIosArrowForward></IoIosArrowForward>
                        </p>
                        <p className="pl-8 text-[14px] font-medium leading-[23.8px]">
                          Automne 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Liens  */}
          <div>
            <div>
              <div className="mb-10">
                <h3 className="mb-3 text-lg font-bold uppercase tracking-[1.1px] text-red-600">
                  Liens
                </h3>
                <div className="border-t-4 border-black bg-neutral-200 p-4 text-neutral-600">
                  <a className="mb-10 block bg-black p-4">
                    <div>
                      <div className=" flex  items-center justify-center gap-3 ">
                        <p className="text-[14px] font-medium uppercase leading-[23.8px]  text-white">
                          Automne 2025
                        </p>
                        <p className="text-red-500 ">
                          <IoIosArrowForward></IoIosArrowForward>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* DOCUMENTS  */}
          <div>
            <div>
              <div className="mb-10">
                <h3 className="mb-3 text-lg font-bold uppercase tracking-[1.1px] text-red-600">
                  Documents
                </h3>
                <div className="border-t-4 border-black bg-neutral-200 p-4 text-neutral-600">
                  <div>
                    <div>
                      <h4 className=" mb-2 font-bold text-black">
                        Grille de cours - Technologie du génie électrique :
                        Réseaux et télécommunications{" "}
                      </h4>
                      <div className=" relative ">
                        <p className="text-[14px] font-medium  leading-[23.8px]">
                          Fichier PDF - 164 ko
                        </p>
                      </div>

                      <a href="/abuiit" className="block p-4 pb-0 pl-0">
                        <div>
                          <div className=" flex  items-center gap-3  ">
                            <p className=" ">
                              <IoMdDownload />
                            </p>
                            <p className="text-[14px] font-medium  uppercase  leading-[23.8px]">
                              Automne 2025
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
