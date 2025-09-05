import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <section>
                    <div className="bg-neutral-800 text-white w-[70%] h-15 flex justify-around items-center ">
                        <div className="">
                            <NavLink to="/">
                                <h1 className="text-3xl font-bold" >WorldAtlas</h1>
                            </NavLink >

                        </div>
                        <div className="">
                            <ul className="flex gap-5 cursor-pointer">
                                <li> <NavLink to="/">Home</NavLink></li>
                                <li> <NavLink to="about">About</NavLink></li>
                                <li> <NavLink to="country">Country</NavLink></li>
                                <li> <NavLink to="contact">Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </header>

        </>
    )
}

export default Header;
