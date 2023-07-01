import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css';
import { useContext } from "react";
import { UserContext } from "./UserContext";

const Sidebar = () => {

    const [clicked, setClicked] = useState(false);

    const {value, setValue} = useContext(UserContext);

    function myFunction(x) {
        setClicked(!clicked);
    }

    return (
        <div className="SIDEBAR">
            <div className={clicked ? "sidebar change sidebar-changed" : "sidebar"}>

                <div className={clicked ? "container change" : "container"} onClick={() => myFunction(this)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                
                <div className="websitename">BOOKS4U</div>   
                <div className="home"><Link to="/">Home</Link></div>
                <div className="cartlink">
                    <div className="cart"><Link to="/cart">Cart</Link></div>
                    <div className="itemno">{value.noqty}</div>
                </div>
                


            </div>
            
            <div className={clicked ? "genres-changed" : "genres"}>
                <div className="gen"><span className="genn">Genres</span></div>
                <div className="item"><Link to="/romance"><span>Romance</span></Link></div>                
                <div className="item"><Link to="/adventure"><span>Action {'&'} Adventure</span></Link></div>
                <div className="item"><Link to="/mystery"><span>Mystery {'&'} Thriller</span></Link></div>
                <div className="item"><Link to="/historical"><span>Historical</span></Link></div>
                <div className="item"><Link to="/fantasy"><span>Fantasy</span></Link></div>
                <div className="item"><Link to="/fiction"><span>Fiction</span></Link></div>
            </div>

        </div>
        
    );
}
 
export default Sidebar;