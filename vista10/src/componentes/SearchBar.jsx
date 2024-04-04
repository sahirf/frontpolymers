import "./SearchBar.css"
const SearchBar = () => {
  return (
    <div className="search-bar" style={{position: 'absolute', top: '190px', left: '350px'}}>
      <input type="text" placeholder="Instert polymer" />
    </div>
  );
};

export default SearchBar;
