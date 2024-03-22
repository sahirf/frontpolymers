import SearchBar from "./SearchBar";
import LogoName from "./LogoName";
import "./Header.css"

const Header = () => {
    return (
      <header>
        <LogoName  />
        <a href="www.a.com" target="_blank" rel="noopener noreferrer">
      <div className="logo"  style={{ marginLeft: "150px" }}>
      <img src={process.env.PUBLIC_URL + "/user.png"} alt="Logo"  style={{position: 'absolute', width: "5%",left: '1300px' ,top: '-40px' }} />
      </div>
      </a>
        <a h2 className= "Mix" href="www.xd.com" style={{ position: 'absolute',left: '1100px',top: '-20px' }}>
         MixPolymers
       </a>
        <a h2 className="Find" href="www.xd.com" style={{ position: 'absolute',left: '900px',top: '-20px' }}>
        Find Polymers</a>
        <a h2 className="Search" href="www.xd.com"style={{ position: 'absolute',left: '650px',top: '-20px' }}>
         Search Polymers </a>
        <SearchBar />
      </header>
    );
  };
  
  export default Header;
  