/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// style
import "./CountryCard.scss"

// bootstrap
import Card from 'react-bootstrap/Card';

// react
import { useNavigate } from 'react-router-dom';


function CountryCard({ countryImage, countryImageAlt, countryName, countryPopulation, countryRegion, countryCapital }) {
  // use navigate hook
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/countries-api/country/${countryName}`)
  }
  
  return (  
    <Card className="country-card shadow-sm" onClick={handleClick}>
      <Card.Img variant="top" src={countryImage} alt={countryImageAlt} className="country-image" />
      <Card.Body>
        <Card.Title className="country-name my-3">{countryName}</Card.Title>
        <Card.Text>
          Population: <span>{countryPopulation}</span> 
        </Card.Text>
        <Card.Text>
          Region: <span>{countryRegion}</span>
        </Card.Text>
        <Card.Text>
          Capital: <span>{countryCapital}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CountryCard;