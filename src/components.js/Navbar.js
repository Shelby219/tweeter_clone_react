import {Link} from 'react-router-dom'
import '../style.css';

const Nav = () => {
   
    return (
        <div  class="nav">
            <Link class="nav-link"to="/">Home</Link>
            <Link class="nav-link"to="/posts/new">Add a Twoot</Link>
        </div>
    )
}

export default Nav