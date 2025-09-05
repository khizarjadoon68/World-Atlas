import CountryDetails from "../API/CountryDetails.json";
import CountryDetail from "../Components/UI/CountryDetail";
import { Link } from "react-router-dom";

const Country = () => {

    if (!Array.isArray(CountryDetails) || CountryDetails.length === 0) {
        return <p className="text-center text-white p-8">No country data available.</p>;
    }

    return (
        <div className=" mt-10 pl-70 pr-70">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {CountryDetails.map((country) => (
                    <Link to={`/country/${country.name.common}`} key={country.name.common} className="no-underline">

                        <CountryDetail name={country.name} flags={country.flags} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Country;