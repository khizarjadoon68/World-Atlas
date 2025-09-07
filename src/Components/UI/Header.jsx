import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header>
            <section className="bg-neutral-800 text-white w-full ">
                <div className="container md:w-full mx-auto px-4 py-4 flex flex-col sm:flex-row justify-around items-center">
                    <div>
                        <NavLink to="/" onClick={closeMenu}>
                            <h1 className="text-3xl font-bold" >WorldAtlas</h1>
                        </NavLink >
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden sm:block">
                        <ul className="flex items-center gap-5 cursor-pointer">
                            <li> <NavLink to="/">Home</NavLink></li>
                            <li> <NavLink to="about">About</NavLink></li>
                            <li> <NavLink to="country">Country</NavLink></li>
                            <li> <NavLink to="contact">Contact</NavLink></li>
                        </ul>
                    </nav>

                    {/* Mobile Navigation Button */}
                    <div className="sm:hidden">
                        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <nav className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col items-center gap-4 py-4">
                        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
                        <li><NavLink to="about" onClick={closeMenu}>About</NavLink></li>
                        <li><NavLink to="country" onClick={closeMenu}>Country</NavLink></li>
                        <li><NavLink to="contact" onClick={closeMenu}>Contact</NavLink></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default Header;
