/* eslint-disable react/prop-types */
// style
import "./SearchField.scss"

// icon
import { CiSearch } from "react-icons/ci";


function SearchField({ onChange }) {
  return ( 
    <div className="search-field">
      <CiSearch size={25} className="search-icon" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a country..."
        className="search-field shadow-sm"
        onChange={onChange}
        aria-label="Search for a country"
      />
    </div>
  );
}

export default SearchField;