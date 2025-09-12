import Image from "next/image";

function CertificatsEconomies() {
  return (
    <>
      <header className="flex flex-col pb-80 lg:pb-10 lg:flex-row bg-[url('/hero-mobile-pages.webp')] lg:bg-[url('/hero-desktop-history.webp')] bg-cover bg-center bg-no-repeat px-8 py-12 lg:items-center lg:pl-20 lg:pr-0 2xl:pl-64 2xl:pr-0 relative">
        <div className="lg:w-2/3 lg:px-16">
          <h1 className="text-4xl font-emOne uppercase text-tertiary mb-8 leading-tight lg:mb-10">
            <span className="text-primary bg-tertiary rounded-full px-4">
              Certificats
            </span>{" "}
            d&apos;économie d&apos;énergie{" "}
          </h1>
          <p className="text-xl font-kollektif text-tertiary mb-6">
            Profitez des Certificats d&apos;économie d&apos;énergie avec
            GÉNIECLIM FRANCE
          </p>
        </div>
        <div className="absolute bottom-2 right-0 lg:relative lg:bottom-auto lg:right-auto lg:flex lg:justify-end lg:items-center lg:flex-1 lg:pr-0">
          <Image
            src="/help.png"
            alt="Aide et conseil"
            width={500}
            height={400}
            className="w-92 h-80 lg:w-full lg:h-auto"
          />
        </div>
      </header>
      <section className="py-16 px-8 lg:px-28 xl:px-40 2xl:px-80 bg-white">
        <h2 className="text-3xl font-bold uppercase mb-8 text-primary">
          Les Certificats d&apos;Économies d&apos;Énergie (CEE)
        </h2>

        <div className="space-y-8">
          <div>
            <p className="text-lg mb-6">
              Le dispositif des Certificats d&apos;Économies d&apos;Énergie, mis
              en place par l&apos;État depuis 2005, est un outil majeur pour
              encourager la transition énergétique en France. Il oblige les
              fournisseurs d&apos;énergie (appelés « obligés ») à financer des
              travaux permettant de réduire la consommation d&apos;énergie des
              particuliers, des entreprises et des collectivités.
            </p>

            <p className="text-lg mb-8">
              Concrètement, cela signifie que vos travaux de rénovation
              énergétique peuvent être partiellement ou totalement pris en
              charge grâce aux primes CEE. Isolation, chauffage, ventilation, ou
              encore régulation de l&apos;énergie : de nombreux gestes sont
              éligibles.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-600 uppercase">
              Pourquoi profiter des CEE ?
            </h3>

            <ul className="space-y-4 list-disc list-inside">
              <li className="text-lg">
                <strong>Réduire votre facture de travaux :</strong> une partie
                du coût est financée par les primes.
              </li>
              <li className="text-lg">
                <strong>Améliorer votre confort :</strong> mieux isoler et mieux
                chauffer, c&apos;est un habitat plus agréable au quotidien.
              </li>
              <li className="text-lg">
                <strong>Valoriser votre patrimoine :</strong> un logement
                performant sur le plan énergétique prend de la valeur.
              </li>
              <li className="text-lg">
                <strong>Agir pour l&apos;environnement :</strong> consommer
                moins d&apos;énergie, c&apos;est réduire durablement son
                empreinte carbone.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-600 uppercase">
              Notre rôle
            </h3>

            <p className="text-lg mb-4">Nous vous accompagnons pour :</p>
            <ul className="space-y-3 list-disc list-inside mb-8">
              <li className="text-lg">
                Identifier les travaux éligibles aux CEE selon votre logement et
                votre situation.
              </li>
              <li className="text-lg">
                Constituer et simplifier votre dossier administratif.
              </li>
              <li className="text-lg">
                Maximiser le montant de vos primes, grâce à notre expertise et
                notre partenariat direct avec les délégataires.
              </li>
              <li className="text-lg">
                Assurer un suivi complet jusqu&apos;au versement de l&apos;aide.
              </li>
            </ul>

            <p className="text-lg mb-8">
              Dans les sections suivantes, vous retrouverez le détail des fiches
              CEE que nous commercialisons, avec les conditions
              d&apos;éligibilité, les montants disponibles et les avantages de
              chaque opération.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-600 uppercase">
              Fiches CEE disponibles
            </h3>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-3">
                    BAR-EN-101
                  </span>
                  <span className="text-lg">
                    Mise en place d&apos;une isolation thermique en combles
                    perdus.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-3">
                    BAR-EN-103
                  </span>
                  <span className="text-lg">
                    Mise en place d&apos;une isolation thermique d&apos;un
                    plancher bas.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-3">
                    BAR-TH-148
                  </span>
                  <span className="text-lg">
                    Mise en place d&apos;un chauffe-eau thermodynamique
                    individuel à accumulation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-3">
                    BAR-TH-171
                  </span>
                  <span className="text-lg">
                    Mise en place d&apos;une pompe à chaleur air/eau.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-3">
                    TRA-EQ-131
                  </span>
                  <span className="text-lg">
                    Achat ou location longue durée de vélos-cargos à assistance
                    électrique (neufs ou reconditionnés), par une personne.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CertificatsEconomies;
