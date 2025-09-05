import { MdArrowRightAlt } from "react-icons/md";

const HeroSection = () => {
    return (
        <>
            <main className="flex justify-center h-80 bg-black mt-15 ">
                <div className=" main ml-15 text-white w-[70%] flex items-center  rounded-xl">

                    <div className=" flex flex-col gap-5 w-[45%] p-4 rounded-md ">
                        <h1 className="text-4xl font-bold mb-2">
                            Explore the world, One country at a time.
                        </h1>
                        <p className="mb-4">
                            Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
                        </p>
                        <button className="flex items-center bg-neutral-800 w-[40%] justify-center border rounded-2xl p-2 gap-2 cursor-pointer hover:bg-neutral-700 t">
                            Start Exploring <span className="text-2xl mt-1.5"><MdArrowRightAlt /></span>
                        </button>
                    </div>

                    <div className="ml-10 w-[45%]">
                        <img src="/imgs/landscape_large_world_map.png" alt="Detailed world atlas map" className="w-full h-auto rounded-md" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default HeroSection;
