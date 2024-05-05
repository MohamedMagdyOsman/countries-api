// skeleton loading
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// style
import "./CountryCard.scss"

// bootstrap
import Card from 'react-bootstrap/Card';


function CountryCardSkeleton() {
  return ( 
    <Card className="country-card shadow-sm" style={{ minHeight: 343 }}>
      <Skeleton height={160} baseColor='#c5c5c5' />
      <Card.Body style={{ width: 320 }}>
        <Card.Title className="country-name my-3">
          <Skeleton baseColor='#c5c5c5' />
        </Card.Title>
          <Skeleton count={3} baseColor='#c5c5c5' />
      </Card.Body>
    </Card>
  );
}

export default CountryCardSkeleton;