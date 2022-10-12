import PropTypes from "prop-types";

const SearchBox = ({ delay }) => {
  return <input type="text" placeholder="Search" onChange={delay} />;
};

SearchBox.propTypes = {
  delay: PropTypes.func.isRequired,
};

export default SearchBox;
