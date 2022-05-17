import Header from "../components/layout/Header";
import Menu from "../components/layout/Menu";

function Home() {
  const menuSize = 2;
  const contentSize = `col-md-${12-menuSize} text-center`;
  return (
    <div className="container-fluid">
      <Header />
      <div className="row py-3 px-2">
        <Menu size={menuSize}/>
        <div className={contentSize}>
          <h3>Qué rico, parsero</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;