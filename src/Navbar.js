import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="">
            <div className="flex justify-between">
                <div>
                    <h2>Spencer Shaw</h2>
                </div>
                <div>
                    <Link to="" className="">About</Link>
                    <Link to="" className="">Experience</Link>
                    <Link to="" className="">Work</Link>
                    <Link to="" className="">Contact</Link>
                    <Link to="" className="">Resume</Link>
                </div>
            </div>
            
        </nav>
     );
}
 
export default Navbar;