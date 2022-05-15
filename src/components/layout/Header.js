import './Header.css';

function Header() {
  return (
      <div id="header" className="row py-3 border-bottom">
        <div className="col-md-2 offset-md-5 text-center">
          <img id="logo" className="img-fluid" alt="Logo de El Majao" src="/logo.jpg"/>
        </div> 
      </div>
  );
}

export default Header;