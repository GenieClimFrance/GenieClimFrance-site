function table({
  activeTab,
  setActiveTab,
  showScrollHint,
  setShowScrollHint,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  showScrollHint: boolean;
  setShowScrollHint: (show: boolean) => void;
}) {
  return (
    <>
      <section className="py-16 px-8 lg:px-28 xl:px-40 2xl:px-80 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase mb-4 text-gray-800">
            PLAFOND DES RESSOURCES
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Annuelles pour bénéficier de MaPrimeRénov&apos; et de la prime CEE
          </p>
        </div>

        {/* Système d'onglets sobre */}
        <div className="w-full max-w-5xl mx-auto">
          {/* Navigation des onglets */}
          <div className="flex justify-center mb-8">
            <div className="border border-gray-200 rounded-lg p-1 bg-white shadow-sm">
              <button
                className={`px-3 py-2 sm:px-6 sm:py-3 font-semibold text-sm sm:text-base rounded-md transition-all duration-200 ${
                  activeTab === "hors-idf"
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("hors-idf")}
              >
                <span className="hidden sm:inline">Hors Île-de-France</span>
                <span className="sm:hidden">Hors IDF</span>
              </button>
              <button
                className={`px-3 py-2 sm:px-6 sm:py-3 font-semibold text-sm sm:text-base rounded-md transition-all duration-200 ml-1 ${
                  activeTab === "idf"
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("idf")}
              >
                <span className="hidden sm:inline">Île-de-France</span>
                <span className="sm:hidden">IDF</span>
              </button>
            </div>
          </div>

          {/* Contenu des onglets */}
          <div
            className={`transition-opacity duration-300 ${
              activeTab === "hors-idf"
                ? "opacity-100"
                : "opacity-0 absolute invisible"
            }`}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                HORS ÎLE-DE-FRANCE
              </h3>
              <p className="text-gray-600">Plafonds de ressources annuelles</p>
            </div>

            <div className="relative">
              {/* Indicateur de défilement pour mobile */}
              {showScrollHint && (
                <div className="md:hidden absolute top-2 right-2 z-10 bg-primary text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1 animate-bounce">
                  <span className="animate-pulse">←</span>
                  <span className="hidden xs:inline font-medium">Défiler</span>
                  <span className="animate-pulse">→</span>
                </div>
              )}
              <div
                className="overflow-x-auto shadow-lg rounded-lg bg-white"
                onScroll={() => setShowScrollHint(false)}
              >
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                      <th className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-left font-semibold text-gray-700 text-sm sm:text-base">
                        Nombre de personnes
                      </th>
                      <th className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center font-semibold text-blue-600 text-xs sm:text-sm lg:text-base">
                        Revenus très modestes
                      </th>
                      <th className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center font-semibold text-yellow-600 text-xs sm:text-sm lg:text-base">
                        Revenus modestes
                      </th>
                      <th className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center font-semibold text-purple-600 text-xs sm:text-sm lg:text-base">
                        Revenus intermédiaires
                      </th>
                      <th className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center font-semibold text-red-600 text-xs sm:text-sm lg:text-base">
                        Revenus supérieurs
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 font-semibold text-gray-800 text-sm sm:text-base">
                        1
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        17 173 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        22 015 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        30 844 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        &gt; 30 844 €
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 font-semibold text-gray-800 text-sm sm:text-base">
                        2
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        25 115 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        32 197 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        45 340 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        &gt; 45 340 €
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 font-semibold text-gray-800 text-sm sm:text-base">
                        3
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        30 206 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        38 719 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        54 592 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        &gt; 54 592 €
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 font-semibold text-gray-800 text-sm sm:text-base">
                        4
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        35 285 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        45 234 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        63 844 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        &gt; 63 844 €
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 font-semibold text-gray-800 text-sm sm:text-base">
                        5
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        40 388 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        51 775 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        73 098 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        &gt; 73 098 €
                      </td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 font-semibold text-gray-800 text-sm sm:text-base">
                        Par personne supplémentaire
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base font-medium">
                        +5 094 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base font-medium">
                        +6 525 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base font-medium">
                        +9 254 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base font-medium">
                        +9 254 €
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div
            className={`transition-opacity duration-300 ${
              activeTab === "idf"
                ? "opacity-100"
                : "opacity-0 absolute invisible"
            }`}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                ÎLE-DE-FRANCE
              </h3>
              <p className="text-gray-600">Plafonds de ressources annuelles</p>
            </div>

            <div className="relative">
              {/* Indicateur de défilement pour mobile */}
              {showScrollHint && (
                <div className="md:hidden absolute top-2 right-2 z-10 bg-primary text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1 animate-bounce">
                  <span className="animate-pulse">←</span>
                  <span className="hidden xs:inline font-medium">Défiler</span>
                  <span className="animate-pulse">→</span>
                </div>
              )}
              <div
                className="overflow-x-auto shadow-lg rounded-lg bg-white"
                onScroll={() => setShowScrollHint(false)}
              >
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                      <th className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-left font-semibold text-gray-700 text-sm sm:text-base">
                        Nombre de personnes
                      </th>
                      <th className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center font-semibold text-blue-600 text-xs sm:text-sm lg:text-base">
                        Revenus très modestes
                      </th>
                      <th className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center font-semibold text-yellow-600 text-xs sm:text-sm lg:text-base">
                        Revenus modestes
                      </th>
                      <th className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center font-semibold text-purple-600 text-xs sm:text-sm lg:text-base">
                        Revenus intermédiaires
                      </th>
                      <th className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center font-semibold text-red-600 text-xs sm:text-sm lg:text-base">
                        Revenus supérieurs
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 font-semibold text-gray-800 text-sm sm:text-base">
                        1
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        23 768 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        28 933 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        40 404 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        &gt; 40 404 €
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 font-semibold text-gray-800 text-sm sm:text-base">
                        2
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        34 884 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        42 463 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        59 394 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        &gt; 59 394 €
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 font-semibold text-gray-800 text-sm sm:text-base">
                        3
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        41 893 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        51 000 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        71 060 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        &gt; 71 060 €
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 font-semibold text-gray-800 text-sm sm:text-base">
                        4
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        48 914 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        59 549 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        83 637 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        &gt; 83 637 €
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 font-semibold text-gray-800 text-sm sm:text-base">
                        5
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        55 961 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        68 123 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        95 758 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base">
                        &gt; 95 758 €
                      </td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 font-semibold text-gray-800 text-sm sm:text-base">
                        Par personne supplémentaire
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base font-medium">
                        +7 038 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base font-medium">
                        +8 568 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base font-medium">
                        +12 122 €
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 lg:px-6 text-center text-gray-700 text-xs sm:text-sm lg:text-base font-medium">
                        +12 122 €
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-sm">
              <strong>Note :</strong> &gt; signifie &quot;supérieur à&quot; -
              Ces montants correspondent aux plafonds de ressources annuelles
              pour bénéficier des aides MaPrimeRénov&apos; et CEE
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default table;
