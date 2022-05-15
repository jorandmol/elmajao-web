import Feed from "./Feed"
import Menu from "./Menu"
import News from "./News"

function Content() {
    return (
        <div id="content" className="row bg-light py-3">
            <Menu />
            <Feed />
            <News />
        </div>
    )
}

export default Content;