import "./SearchBar.css"
const SearchBar = () => {
  return (
    <div className="search-bar" style={{position: 'absolute', top: '170px', left: '350px'}}>
      <input type="text" placeholder="Buscar Polímero" />
      <button type="submit" >
      <a h1 className="find" href="www.xd.com" target="_blank" rel="noopener noreferrer">Find</a>
      </button>
    </div>
  );
};

export default SearchBar;
