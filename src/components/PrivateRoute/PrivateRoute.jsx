import { useContext } from "react";
import { AuthContex } from "../../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {
    const{user} = useContext(AuthContex);
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}