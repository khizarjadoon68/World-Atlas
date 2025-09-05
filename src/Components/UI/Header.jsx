import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <section className="bg-neutral-800 text-white w-full">
                    <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
                        <div>
                            <NavLink to="/">
                                <h1 className="text-3xl font-bold" >WorldAtlas</h1>
                            </NavLink >

                        </div>
                        <nav className="mt-4 sm:mt-0">
                            <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 cursor-pointer">
                                <li> <NavLink to="/">Home</NavLink></li>
                                <li> <NavLink to="about">About</NavLink></li>
                                <li> <NavLink to="country">Country</NavLink></li>
                                <li> <NavLink to="contact">Contact</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </header>

        </>
    )
}

export default Header;
