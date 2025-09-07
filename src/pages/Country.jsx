import { useState } from "react";
import CountryDetails from "../API/CountryDetails.json";
import CountryDetail from "../Components/UI/CountryDetail";
import { Link } from "react-router-dom";

const Country = () => {
    const [searchTerm, setSearchTerm] = useState("");

    if (!Array.isArray(CountryDetails) || CountryDetails.length === 0) {
        return <p className="text-center text-white p-8">No country data available.</p>;
    }

    const filteredCountries = CountryDetails.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search for a country..."
                    className="bg-neutral-800 border border-neutral-600 rounded-md p-2 w-full max-w-md mx-auto block focus:ring-2 focus:ring-blue-500 focus:outline-none text-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {filteredCountries.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredCountries.map((country) => (
                        <Link to={`/country/${country.name.common}`} key={country.name.common} className="no-underline">
                            <CountryDetail name={country.name} flags={country.flags} />
                        </Link>
                    ))}
                </div>
            ) : (
                <p className="text-center text-white p-8">No countries found matching your search.</p>
            )}
        </div>
    );
};

export default Country;