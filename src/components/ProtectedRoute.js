import { Navigate } from "react-router-dom";
import GlobalLoading from "./GlobalLoading/GlobalLoading";

function ProtectedRoute({ element: Component, ...props  }) {
    
    if ( props.checkingAuth || props.savedMoviesLoaded) {
        return <GlobalLoading />;
    }

    return (
        props.loggedIn ? <Component {...props} /> : <Navigate to="/" replace/>
    )
}

export default ProtectedRoute;