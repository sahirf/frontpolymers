import "./SearchBar.css"
const SearchBar = () => {
  return (
    <div className="search-bar" style={{position: 'absolute', top: '190px', left: '110px'}}>
      <input type="text" placeholder="Materials number" />
    </div>
  );
};

export default SearchBar;
