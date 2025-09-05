import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
    return (
        <>
            <h1 className="text-4xl font-bold text-white underline">Error Page</h1>

            {error && <p className="text-white" >{error.data}</p>}
            <NavLink to={"/"}  >
                <button className="text-white bg-red-800 rounded-xl h-7 w-30 ">

                    Go Home
                </button>
            </NavLink>
        </>
    )
}

export default ErrorPage;
