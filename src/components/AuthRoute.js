import { Navigate } from "react-router-dom";

function AuthRoute({ element: Component, ...props  }) {

    return (
        props.loggedIn ? <Navigate to="/movies" replace/> : <Component {...props} />
    )
}

export default AuthRoute;