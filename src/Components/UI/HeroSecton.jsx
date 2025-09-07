import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <main className="flex justify-center bg-black mt-16 py-8 md:py-12 lg:py-16 md:ml-18">
            <div className="main text-white w-[90%] md:w-[80%] lg:w-[70%] flex flex-col lg:flex-row items-center rounded-xl gap-8">

                <div className="flex flex-col gap-5 w-full lg:w-[45%] p-4 rounded-md text-center lg:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        Explore the world, One country at a time.
                    </h1>
                    <p className="mb-4">
                        Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
                    </p>
                    <Link to="/country" className="flex items-center bg-neutral-800 w-[60%] sm:w-[50%] lg:w-[40%] mx-auto lg:mx-0 justify-center border rounded-2xl p-2 gap-2 cursor-pointer hover:bg-neutral-700 transition-colors no-underline text-white">
                        Start Exploring <span className="text-2xl mt-1.5"><MdArrowRightAlt /></span>
                    </Link>
                </div>

                <div className="w-full lg:w-[45%]">
                    <img src="/imgs/landscape_large_world_map.png" alt="Detailed world atlas map" className="w-full h-auto rounded-md" />
                </div>
            </div>
        </main>
    );
};

export default HeroSection;
