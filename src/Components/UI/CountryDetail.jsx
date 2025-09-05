const CountryDetail = ({ name, flags }) => {

    const nativeName = Object.values(name.nativeName ?? {})[0]?.common ?? name.common;

    return (
        <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden text-white transform hover:scale-105 transition-transform duration-300 h-full flex flex-col">
            <img
                src={flags.svg}
                alt={flags.alt || `Flag of ${name.common}`}
                className="w-full h-32 sm:h-40 object-cover"
            />
            <div className="p-3 sm:p-4 flex-grow">
                <h3 className="font-bold text-lg sm:text-xl mb-2">{name.common}</h3>
                <div className="space-y-1 text-sm text-neutral-300">
                    <p><span className="font-semibold text-white">Official:</span> {name.official}</p>
                    <p><span className="font-semibold text-white">Native:</span> {nativeName}</p>
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;