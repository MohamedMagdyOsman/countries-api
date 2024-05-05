/* eslint-disable react/prop-types */
// style
import { useState } from 'react';
import './FilterSelect.scss'

// bootstrap
import Dropdown from 'react-bootstrap/Dropdown';

// icon
import { IoIosArrowDown } from "react-icons/io";


function FilterSelect({ passSelectedRegion }) {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  const [selectedRegion, setSelectedRegion] = useState('');
  const hadleSelectRegion = (region) => {
    selectedRegion == '' ? setSelectedRegion(region) : setSelectedRegion('');
    selectedRegion == '' ? passSelectedRegion(region) : passSelectedRegion('');
  }
  
  return ( 
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown-button shadow-sm'>
        { selectedRegion ? `${selectedRegion}` : 'Select Region' }
        <IoIosArrowDown className='drobdown-icon' />
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu'>
        {
          regions.map((region, index) => {
            return <span
              key={index}
              className={`dropdown-item ${selectedRegion == region ? 'active' : ''}`}
              onClick={() => hadleSelectRegion(region)}
            >{region}</span>
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterSelect;