import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";

const SingleCountry = () => {
    const [country, setCountry] = useState(null);
    const [borderCountries, setBorderCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { countryName } = useParams();

    useEffect(() => {
        const fetchCountryData = async () => {
            setIsLoading(true);
            setError(null);
            setCountry(null);
            setBorderCountries([]);

            try {
                // FIX: URL-encode the country name to handle spaces and special characters
                const encodedCountryName = encodeURIComponent(countryName);
                const response = await fetch(`https://restcountries.com/v3.1/name/${encodedCountryName}?fullText=true`);

                if (!response.ok) {
                    if (response.status === 404) throw new Error(`Country "${countryName}" not found.`);
                    throw new Error(`API error! Status: ${response.status}`);
                }

                const data = await response.json();
                setCountry(data[0]);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCountryData();
    }, [countryName]);

    useEffect(() => {
        if (!country || !country.borders || country.borders.length === 0) {
            setBorderCountries([]);
            return;
        }

        const fetchBorders = async () => {
            try {
                const codes = country.borders.join(',');
                const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`);
                if (!response.ok) throw new Error('Failed to fetch border countries');
                const data = await response.json();
                setBorderCountries(data);
            } catch (e) {
                console.error(e);
            }
        };

        fetchBorders();
    }, [country]);

    if (isLoading) return <p className="text-center text-white p-8 text-xl">Loading country details...</p>;
    if (error) return <p className="text-center text-red-500 p-8 text-xl">Error: {error}</p>;
    if (!country) return <p className="text-center text-white p-8">No country data available.</p>;

    const languages = Object.values(country.languages ?? {}).join(', ');
    const currencies = Object.values(country.currencies ?? {}).map(c => `${c.name} (${c.symbol})`).join(', ');
    const nativeName = Object.values(country.name.nativeName ?? {})[0]?.common ?? country.name.common;

    return (
        <section className="bg-black text-white min-h-screen p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <Link to="/country" className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded-lg transition-colors mb-8">
                    <IoArrowBack /> Back
                </Link>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    <img src={country.flags.svg} alt={country.flags.alt || `Flag of ${country.name.common}`} className="w-full rounded-lg shadow-lg border border-neutral-700" />
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl sm:text-5xl font-bold">{country.name.common}</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg">
                            <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
                            <p><span className="font-semibold">Region:</span> {country.region}</p>
                            <p><span className="font-semibold">Capital:</span> {country.capital?.join(', ') ?? 'N/A'}</p>
                            <p><span className="font-semibold">Currencies:</span> {currencies}</p>
                            <p><span className="font-semibold">Languages:</span> {languages}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCountry;