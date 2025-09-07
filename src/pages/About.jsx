import countryFacts from "../API/CountryData.json";

const About = () => {
    return (
        <section className="text-white ">
            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">

                <div className="flex justify-center">
                    <h1 className="text-2xl sm:text-3xl font-bold text-center">
                        Here are the interesting facts
                        <br />
                        we're proud of
                    </h1>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-10">
                    {countryFacts.map(({ id, countryName, capital, population, interestingFact }) => (
                        <div
                            key={id}
                            className="flex flex-col rounded-2xl border border-neutral-600 w-full sm:w-72 h-auto p-4"
                        >
                            <h2 className="text-2xl font-semibold">{countryName}</h2>
                            <p className="mt-2">
                                <span className="text-neutral-400">Capital:</span> {capital}
                            </p>
                            <p>
                                <span className="text-neutral-400">Population:</span> {population}
                            </p>
                            <p>
                                <span className="text-neutral-400">Interesting Fact:</span> {interestingFact}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section >
    );
};

export default About;
