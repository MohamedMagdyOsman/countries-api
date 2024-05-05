  // style
  import "./Home.scss";

  // components
  import SearchField from "../../components/SearchField/SearchField";
  import FilterSelect from "../../components/FilterSelect/FilterSelect";
  import CountryCard from "../../components/CountryCard/CountryCard";
  import CountryCardSkeleton from "../../components/CountryCard/CountryCardSkeleton";

  // react
  import { useEffect, useState } from "react";


  function Home() {
    const [allCountries, setAllCountries] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [selectedRegionFilter, setSelectedRegionFilter] = useState("");
    const skeletonCards = 9; 

    const getSelectedRegion = (region) => {
      setSelectedRegionFilter(region)
    }
    
    const handleSearchInputChange = (event) => {
      setSearchInput(event.target.value);
    };

    const filterByRegion = allCountries.filter((country) => {
      if (!selectedRegionFilter) return true;
      return country.region.toLowerCase() == selectedRegionFilter.toLowerCase()
    })

    const filteredCountries = filterByRegion.filter((country) =>
      country.name.common.toLowerCase().includes(searchInput.toLowerCase())
    );

    useEffect(() => {
      async function getCountries() {
        try {
          const response = await fetch("https://restcountries.com/v3.1/all");
          const countries = await response.json();

          setAllCountries(countries);
        } catch (error) {
          console.error("Error fetching countries:", error);
        }
      }

      getCountries();
    }, []);
    
    return (
      <>
        <div className="container">
          <div className="filters d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 gap-sm-0 mb-4">
            <SearchField onChange={handleSearchInputChange} />
            <FilterSelect passSelectedRegion={getSelectedRegion} />
          </div>

          <div className="countries-cards-wrapper mb-4">
            {allCountries.length == 0
              ? Array.from({ length: skeletonCards }).map((_, index) => {
                  return <CountryCardSkeleton key={index} />;
                })
              : filteredCountries.map((country, index) => (
                  <CountryCard
                    key={index}
                    countryImage={country.flags.png}
                    countryImageAlt={country.flags.alt}
                    countryName={country.name.common}
                    countryPopulation={country.population}
                    countryRegion={country.region}
                    countryCapital={country.capital}
                  />
                ))}
          </div>
        </div>
      </>
    );
  }

  export default Home;
