import { Link } from 'react-router-dom';

const MainSection = () => {
    return (
        <div className="maingenre">
            <div className="main-heading">
                <h2>Browse Genre</h2>
            </div>
            <div className="main-genre">
                <div className="genre1"><Link to="/romance"><h2>Romance</h2></Link></div>
                <div className="genre2"><Link to="/adventure"><h2>Action {'&'} Adventure</h2></Link></div>
                <div className="genre3"><Link to="/mystery"><h2>Mystery {'&'} Thriller</h2></Link></div>
                <div className="genre4"><Link to="/historical"><h2>Historical</h2></Link></div>
                <div className="genre5"><Link to="/fantasy"><h2>Fantasy</h2></Link></div>
                <div className="genre6"><Link to="/fiction"><h2>Fiction</h2></Link></div>
            </div>
            
        </div>
    );
}
 
export default MainSection;