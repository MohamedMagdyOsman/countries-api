// style
import "./Country.scss";

// react
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// icon
import { FaArrowLeftLong } from "react-icons/fa6";


function Country() {
  const [countryData, setCountryData] = useState({});
  const { name } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    async function getCountryData() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${encodeURIComponent(
            name
          )}?fullText=true`
        );
        const data = await response.json();
  
        setCountryData(data[0]);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    }

    getCountryData();
  }, [name]);

  return (
    <>
      <div className="container">
        <button className="btn btn-primary mb-4 shadow-sm back-button" onClick={goBack}><FaArrowLeftLong className="icon" /> Back</button>

        {Object.keys(countryData).length > 0 ? (
          <div className="d-flex flex-column flex-md-row gap-5 gap-md-0 justify-content-between country-data ">
            {countryData.flags && (
              <img
                src={countryData.flags.png}
                alt={countryData.flags.alt}
                className="country-flag"
                loading="lazy"
              />
            )}

            <div className="text">
              {countryData.name && <h3>{countryData.name.common}</h3>}
              <p>Population: <span>{countryData.population}</span></p>
              <p>Region: <span>{countryData.region}</span></p>
              <p>Subregion: <span>{countryData.subregion}</span></p>
              {countryData.tld && <p>Top Level Domain: <span>{countryData.tld[0]}</span></p>}
              {countryData.capital && <p>Capital: <span>{countryData.capital[0]}</span></p>}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default Country;
