import { Link } from "react-router-dom";

function HomeJS() {
    return (
      <div>
        <h1>Javascript excercises</h1>
        <Link to={`/js/easy`}>Lahki nivo Javascript nalog</Link><br></br>
        <Link to={`/js/medium`}>Srednji nivo Javascript nalog</Link><br></br>
        <Link to={`/js/hard`}>Težji nivo Javascript nalog</Link>
      </div>
    );
}

export default HomeJS;