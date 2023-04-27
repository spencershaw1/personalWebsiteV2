import { Link } from 'react-router-dom';
import useScrollPosition from './hooks/useScrollPosition';

const Navbar = () => {
    const scrollPosition = useScrollPosition();


    return (
        <nav className={scrollPosition > 0 ? "z-50 bg-slate-900 border-solid border-b border-slate-600 sticky top-0 shadow-lg shadow-slate-800/50" : "z-50 bg-slate-900 border-solid border-b border-slate-600 sticky top-0 shadow-lg shadow-slate-800/50"}>
            <div className="bg-slate-900 flex justify-between py-4 px-12">
                <div className="text-sky-400 text-lg font-sans font-bold uppercase translate-y-1">
                    <Link to="/" className="">Spencer Shaw</Link>
                </div>
                <div className="text-sky-400 font-sans font-bold">
                    <Link to="about" className="px-4 transition duration-200 hover:text-teal-400">About</Link>
                    <Link to="" className="px-4 transition duration-200 hover:text-teal-400">Experience</Link>
                    <Link to="" className="px-4 transition duration-200 hover:text-teal-400">Work</Link>
                    <Link to="" className="pl-4 pr-12 transition duration-200 hover:text-teal-400">Contact</Link>
                    <button to="" className="px-4 py-1 border-solid rounded border-2 border-sky-400 hover:bg-sky-400/25 transition ease-in-out delay-50 hover:scale-105">Resume</button>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;