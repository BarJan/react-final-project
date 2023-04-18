import { Redirect } from "react-router-dom";
import './HomePage.css'


function HomePage(props) {
    
    const {activeUser} = props;
 
    if (activeUser) {
        return <Redirect to="/userhome"/>
    }

    return(
        <div className="h-pg">

        </div>

    );
}

export default HomePage;