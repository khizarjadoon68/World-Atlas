import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-5xl font-bold mb-4">Oops!</h1>
            <p className="text-xl mb-2">Sorry, an unexpected error has occurred.</p>
            <p className="text-neutral-400 mb-8">
                <i>{error.statusText || error.message}</i>
                {error.data && <span className="block mt-2">{error.data}</span>}
            </p>
            <NavLink to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                Go Home
            </NavLink>
        </div>
    );
};

export default ErrorPage;
