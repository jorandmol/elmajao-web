import './Header.css';

function Header() {
  return (
      <div id="header" className="row py-3 bg-white border-bottom">
        <div className="col-md-2 offset-md-5 text-center">
          <img id="logo" className="img-fluid" alt="GroZero logo" src="/logo.png"/>
        </div> 
      </div>
  );
}

export default Header;