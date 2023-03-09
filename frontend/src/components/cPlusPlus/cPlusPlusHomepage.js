
import { Link } from "react-router-dom";
function Home() {
    return (
        <div>
        
        <h1>C++ vaja</h1><br></br> <br></br>
        <Link to={`/cPlusPlus/Easy`}>lahki nivo</Link> <br></br>
        <Link to={`/cPlusPlus/Medium`}>srednji nivo</Link> <br></br>
        <Link to={`/cPlusPlus/Hard`}>težji nivo</Link> <br></br>
   
        </div>
    );
}
export default Home;