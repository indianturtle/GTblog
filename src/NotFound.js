import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h1>404 error</h1>
            <h4>Page cannot be found</h4>
            <Link to= "/">Go back to home page</Link>
        </div>
     );

}
 
export default NotFound;