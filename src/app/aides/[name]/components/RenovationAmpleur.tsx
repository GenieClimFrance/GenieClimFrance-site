"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Table from "./Table";

function RenovationAmpleur() {
  const [activeTab, setActiveTab] = useState("hors-idf");
  const [showScrollHint, setShowScrollHint] = useState(true);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="flex flex-col pb-80 lg:pb-10 lg:flex-row bg-[url('/hero-mobile-pages.webp')] lg:bg-[url('/hero-desktop-history.webp')] bg-cover bg-center bg-no-repeat px-8 py-12 lg:items-center lg:pl-20 lg:pr-0 2xl:pl-64 2xl:pr-0 relative">
        <div className="lg:w-2/3 lg:px-16">
          <h1 className="text-4xl font-emOne uppercase text-tertiary mb-8 leading-tight lg:mb-10">
            Rénovation{" "}
            <span className="text-primary bg-tertiary rounded-full px-4">
              d&apos;ampleur
            </span>
          </h1>
          <p className="text-xl font-kollektif text-tertiary mb-6">
            Transformez votre logement, faites un saut de classes énergétiques
            avec GÉNIECLIM FRANCE
          </p>
          <Image src="/note.png" alt="Note" width={100} height={100} />
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

      {/* Qu'est-ce que la rénovation d'ampleur */}
      <section className="py-16 px-8 lg:px-28 xl:px-40 2xl:px-80">
        <h2 className="text-3xl font-bold uppercase mb-12">
          Qu&apos;est-ce que la rénovation d&apos;ampleur ?
        </h2>
        <div className="w-full">
          <p className="text-lg mb-6">
            MaPrimeRénov’ est la principale aide de l’État pour la rénovation
            énergétique en France. Elle finance des travaux permettant
            d’améliorer significativement la performance énergétique des
            logements et d’accélérer la transition vers des systèmes de
            chauffage plus écologiques.
          </p>
          <p className="text-lg mb-6">
            Depuis le 1er janvier 2024, MaPrimeRénov’ évolue avec un nouveau
            parcours accompa- gné. Les ménages souhaitant s’engager dans des
            travaux de rénovation permettant un gain minimal de 2 classes sur
            leur DPE bénéficieront d’un accompagnement systématique et d’une
            prime revalorisée. En poursuivant ce parcours, ils amélioreront
            significativement l’efficacité énergétique de leur logement.
          </p>
          <p className="text-lg mb-6">
            La rénovation d&apos;ampleur est un programme gouvernemental qui
            oblige un ou plusieurs de travaux officiels simultanément et dans le
            même logement, c&apos;est le nouveau terme privilégié en 2024. Une
            rénovation est dite d&apos;ampleur lorsqu&apos;elle permet de gagner
            au moins deux étapes de DPE.
          </p>

          <h3 className="text-2xl font-bold mb-6 mt-12 text-green-600 uppercase">
            Les objectifs de la rénovation d&apos;ampleur :
          </h3>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 mb-12 max-w-6xl">
            <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg p-4 shadow-md w-full md:w-64 h-auto md:h-64">
              <div className="mb-4 flex flex-shrink-0">
                <Image
                  src="/objectif.svg"
                  alt="Saut d'étiquette énergétique"
                  width={60}
                  height={60}
                />
              </div>
              <h4 className="font-bold text-primary uppercase mb-3 text-sm leading-tight flex-shrink-0">
                Saut d&apos;étiquette énergétique
              </h4>
              <p className="text-xs leading-relaxed overflow-hidden">
                Gagner au moins deux classes au DPE permettant d&apos;améliorer
                l&apos;efficacité énergétique des logements français pour
                réduire les émissions de C02 et combattre le changement
                climatique.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg p-4 shadow-md w-full md:w-64 h-auto md:h-64">
              <div className="mb-4 flex flex-shrink-0">
                <Image
                  src="/objectif.svg"
                  alt="Faire des économies d'énergie"
                  width={60}
                  height={60}
                />
              </div>
              <h4 className="font-bold text-primary uppercase mb-3 text-sm leading-tight flex-shrink-0">
                Faire des économies d&apos;énergie
              </h4>
              <p className="text-xs leading-relaxed overflow-hidden">
                En rénovant leur logement, les clients vont moins consommer
                d&apos;énergie et faire des économies sur leurs factures.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg p-4 shadow-md w-full md:w-64 h-auto md:h-64">
              <div className="mb-4 flex flex-shrink-0">
                <Image
                  src="/objectif.svg"
                  alt="Rénover un habitat"
                  width={60}
                  height={60}
                />
              </div>
              <h4 className="font-bold text-primary uppercase mb-3 text-sm leading-tight flex-shrink-0">
                RÉNOVER UN HABITAT EN TRAITANT LES 6 POSTES DE TRAVAUX DE
                RÉNOVATION
              </h4>
              <p className="text-xs leading-relaxed overflow-hidden">
                Isolation des murs, planchers bas, toiture, remplacement des
                menuiseries extérieures, production de chauffage et eau chaude
                sanitaire.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg p-4 shadow-md w-full md:w-64 h-auto md:h-64">
              <div className="mb-4 flex flex-shrink-0">
                <Image
                  src="/objectif.svg"
                  alt="Rendre accessible"
                  width={60}
                  height={60}
                />
              </div>
              <h4 className="font-bold text-primary uppercase mb-3 text-sm leading-tight flex-shrink-0">
                RENDRE LES RÉNOVATIONS ÉNERGÉTIQUES ACCESSIBLES
              </h4>
              <p className="text-xs leading-relaxed overflow-hidden">
                à un plus grand nombre de ménages en fournissant un soutien
                financier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions d'éligibilité */}
      <section className="py-16 px-8 lg:px-28 xl:px-40 2xl:px-80">
        <h2 className="text-3xl font-bold uppercase mb-12 after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mt-4">
          Conditions d&apos;éligibilité
        </h2>
        <h3 className="text-xl font-bold text-primary mb-6">Pour qui ?</h3>
        <ul className="space-y-2 mb-8">
          <li className="text-lg">- Les propriétaires occupants</li>
          <li className="text-lg">- Les propriétaires bailleurs</li>
          <li className="text-lg">- Les usufruitiers</li>
          <li className="text-lg">
            - Les titulaires (occupants et bailleurs) d&apos;un droit réel
            conférant l&apos;usage du bien ;
          </li>
          <li className="text-lg">
            - Les propriétaires en indivision, si le demandeur fournit une
            attestation indiquant qu&apos;il a obtenu l&apos;accord de tous les
            indivisaires pour réaliser les travaux et bénéficier de l&apos;aide
            MaPrimeRénov&apos;
          </li>
          <li className="text-lg">- SCI si un des propriétaire est occupant</li>
        </ul>
        <p className="text-lg font-bold uppercase mb-4">
          Ne sont pas éligibles :
        </p>
        <ul className="space-y-2 mb-8">
          <li className="text-lg">- Les nus-propriétaires</li>
          <li className="text-lg">
            - les propriétaires qui sont des personnes morales
          </li>
        </ul>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:items-center">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-primary mb-6">
                Pour quel logement ?
              </h3>
              <p className="text-lg mb-6">
                Le logement doit être occupé à titre de résidence principale (≥8
                mois/an) et depuis au moins 15 ans. Les propriétaires occupants
                ou bailleurs peuvent en bénéficier, sous conditions de
                ressources et d&apos;engagement à ne pas revendre dans les 3
                ans.
              </p>

              <div>
                <h3 className="text-lg font-bold mb-4">
                  Les acquéreurs d&apos;un logement sont également éligibles
                </h3>
                <p className="text-lg mb-6">
                  Dans le cas où le logement fait l&apos;objet d&apos;une
                  acquisition en cours à la date du dépôt de la demande le
                  compromis de vente peut être joint par les demandeurs aux
                  revenus intermé-diaires ou supérieurs (cette mesure sera
                  prochainement également appliquée aux demandeurs aux revenus
                  modestes et très modestes) lors de la demande de prime. Ils
                  devront fournir l&apos;acte de vente définitif lors de la
                  demande de solde.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-primary text-white p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-4">
                  Le cas particulier des associés de SCI qui occupent le
                  logement détenu par la SCI
                </h4>
                <p className="text-sm mb-4">
                  Un particulier qui détient des parts d&apos;une SCI
                  propriétaire d&apos;un logement qu&apos;il occupe est assimilé
                  à une personne physique propriétaire occupant. Pour prouver
                  leur situation, les ménages aux ressources intermédiaires et
                  su-périeures doivent être en capacité de fournir un commodat
                  (contrat de prêt à usage) signé devant notaire, couvrant a
                  minima la durée de son engagement d&apos;occupation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les travaux éligibles */}
      <section className="py-16 px-8 lg:px-28 xl:px-40 2xl:px-80">
        <h2 className="text-3xl font-bold uppercase mb-12 text-center">
          Les travaux éligibles
        </h2>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="mx-auto mb-4 flex items-center justify-center h-16">
              <Image
                src="/icon-aides/pac.svg"
                alt="Pompe à chaleur AIR/AIR"
                width={60}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <h4 className="font-bold text-sm">Pompe à chaleur AIR/AIR</h4>
            <p className="text-sm font-bold">Pompe à chaleur AIR/EAU</p>
            <p className="text-sm font-bold">Pompe à chaleur duo</p>
          </div>

          <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="mx-auto mb-4 flex items-center justify-center h-16">
              <Image
                src="/icon-aides/ballon.svg"
                alt="Ballon thermodynamique"
                width={60}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <h4 className="font-bold text-sm">Ballon thermodynamique</h4>
          </div>

          <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="mx-auto mb-4 flex items-center justify-center h-16">
              <Image
                src="/icon-aides/menuiseries.svg"
                alt="Menuiseries"
                width={60}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <h4 className="font-bold text-sm">Menuiseries</h4>
          </div>

          <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="mx-auto mb-4 flex items-center justify-center h-16">
              <Image
                src="/icon-aides/combles.svg"
                alt="Isolation des combles perdus"
                width={60}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <h4 className="font-bold text-sm">Isolation des combles perdus</h4>
          </div>

          <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="mx-auto mb-4 flex items-center justify-center h-16">
              <Image
                src="/icon-aides/ite.svg"
                alt="ITE (Isolation thermique par l'extérieur)"
                width={60}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <h4 className="font-bold text-sm">
              ITE (Isolation thermique par l&apos;extérieur)
            </h4>
          </div>

          <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="mx-auto mb-4 flex items-center justify-center h-16">
              <Image
                src="/icon-aides/plancher.svg"
                alt="Isolation plancher bas"
                width={60}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <h4 className="font-bold text-sm">Isolation plancher bas</h4>
          </div>

          <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="mx-auto mb-4 flex items-center justify-center h-16">
              <Image
                src="/icon-aides/panneausol.svg"
                alt="Fenêtres photovoltaïques"
                width={60}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <h4 className="font-bold text-sm">Panneaux photovoltaïques</h4>
          </div>
        </div>
      </section>

      <Table
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showScrollHint={showScrollHint}
        setShowScrollHint={setShowScrollHint}
      />

      {/* Parcours GénieClim France */}
      <section className="bg-primary rounded-2xl text-white py-16 px-8 lg:px-28 xl:px-40 2xl:px-80 mb-16 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <Image
                src="/women-thumb.png"
                alt=""
                width={300}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="lg:w-2/3">
              <div className="bg-black rounded-full p-2 px-4 mb-4 inline-block">
                <span className="text-sm">
                  Pompe à chaleur + 2 gestes d&apos;isolation
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-6">
                VOTRE PARCOURS GÉNIECLIM FRANCE
              </h3>
              <h4 className="text-xl mb-4 font-semibold italic">
                UN ACCOMPAGNEMENT DE A À Z
              </h4>
              <p className="text-lg mb-6">
                De la visite initiale jusqu&apos;à la demande de visite,
                GénieClim vous guide à chaque étape. Grâce à notre expertise et
                parcours expérimenté, vous bénéficiez d&apos;un montage de
                dossier rapide et complet, pour des travaux sereins et financés.
              </p>
              <Link
                href={"/eligibility"}
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-black hover:text-white transition-colors text-nowrap"
              >
                ESTIMER MON INSTALLATION →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Procédure clients */}
      <section className="py-16 px-8 lg:px-28 xl:px-40 2xl:px-80 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold uppercase mb-3 text-gray-900">
              Procédure clients
            </h2>
            <div className="w-16 h-0.5 bg-primary rounded-full"></div>
            <p className="text-base text-gray-600 mt-4 max-w-2xl">
              Découvrez notre processus en 13 étapes pour vous accompagner de A
              à Z dans votre projet de rénovation énergétique.
            </p>
          </div>

          <div className="max-w-4xl">
            <div className="relative">
              {/* Ligne verticale dégradée */}
              <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/30 rounded-full"></div>

              <div className="space-y-6">
                {/* Étape 1 */}
                <div className="relative flex items-center gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg ring-2 ring-white z-10 group-hover:scale-105 transition-transform duration-300">
                      1
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-md border border-gray-100 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-900">
                      PREMIÈRE VISITE CHEZ LE CLIENT
                    </h4>
                  </div>
                </div>

                {/* Étape 2 */}
                <div className="relative flex items-center gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg ring-2 ring-white z-10 group-hover:scale-105 transition-transform duration-300">
                      2
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-md border border-gray-100 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-900">
                      RÉALISATION DE L&apos;AUDIT ÉNERGÉTIQUE
                    </h4>
                  </div>
                </div>

                {/* Étape 3 */}
                <div className="relative flex items-center gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg ring-2 ring-white z-10 group-hover:scale-105 transition-transform duration-300">
                      3
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-md border border-gray-100 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-900">
                      PASSAGE DU MAR CHEZ LE CLIENT
                    </h4>
                  </div>
                </div>

                {/* Étape 4 */}
                <div className="relative flex items-center gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg ring-2 ring-white z-10 group-hover:scale-105 transition-transform duration-300">
                      4
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-md border border-gray-100 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-900">
                      MONTAGE DU DOSSIER : DEVIS AVEC SCÉNARIO CHOISI
                    </h4>
                  </div>
                </div>

                {/* Étape 5 */}
                <div className="relative flex items-center gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg ring-2 ring-white z-10 group-hover:scale-105 transition-transform duration-300">
                      5
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-md border border-gray-100 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-900">
                      PROPOSITION DU PROJET AUPRÈS D&apos;UN MAR
                    </h4>
                  </div>
                </div>

                {/* Étape 6 */}
                <div className="relative flex items-center gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg ring-2 ring-white z-10 group-hover:scale-105 transition-transform duration-300">
                      6
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-md border border-gray-100 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-900">
                      DÉPÔTS DES DOCUMENTS ADMINISTRATIFS
                    </h4>
                  </div>
                </div>

                {/* Étape 7 */}
                <div className="relative flex items-center gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg ring-2 ring-white z-10 group-hover:scale-105 transition-transform duration-300">
                      7
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-md border border-gray-100 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-900">
                      PASSAGE EN COMMISSION AUPRÈS DE L&apos;ANAH
                    </h4>
                  </div>
                </div>

                {/* Étape 8 */}
                <div className="relative flex items-center gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg ring-2 ring-white z-10 group-hover:scale-105 transition-transform duration-300">
                      8
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-md border border-gray-100 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-900">
                      VALIDATION DE LA PRIME
                    </h4>
                  </div>
                </div>

                {/* Étape 9 */}
                <div className="relative flex items-center gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg ring-2 ring-white z-10 group-hover:scale-105 transition-transform duration-300">
                      9
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-md border border-gray-100 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-900">
                      DEMANDE D&apos;AVANCE DE LA PRIME
                    </h4>
                  </div>
                </div>

                {/* Étape 10 */}
                <div className="relative flex items-center gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg ring-2 ring-white z-10 group-hover:scale-105 transition-transform duration-300">
                      10
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-md border border-gray-100 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-900">
                      DÉMARRAGE DES TRAVAUX
                    </h4>
                  </div>
                </div>

                {/* Étape 11 */}
                <div className="relative flex items-center gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg ring-2 ring-white z-10 group-hover:scale-105 transition-transform duration-300">
                      11
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-md border border-gray-100 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-900">
                      FIN DES TRAVAUX
                    </h4>
                  </div>
                </div>

                {/* Étape 12 */}
                <div className="relative flex items-center gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg ring-2 ring-white z-10 group-hover:scale-105 transition-transform duration-300">
                      12
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-md border border-gray-100 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-900">
                      PASSAGE DU MAR
                    </h4>
                  </div>
                </div>

                {/* Étape 13 */}
                <div className="relative flex items-center gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg ring-2 ring-white z-10 group-hover:scale-105 transition-transform duration-300">
                      13
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-md border border-gray-100 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-900">
                      DÉPÔT DES FACTURES ET OBTENTION DU SOLDE
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RenovationAmpleur;
