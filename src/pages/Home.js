import Header from "../components/layout/Header"
import ListGif from "../components/GifList"

// style
const menuSize = 0
const contentSize = `col-md-${12-menuSize} text-center`

const keyword = 'pandas'

function Home() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row py-3 px-2">
        {/*<Menu size={menuSize}/>*/}
        <div className={contentSize}>
          <ListGif keyword={keyword}/>
        </div>
      </div>
    </div>
  )
}

export default Home