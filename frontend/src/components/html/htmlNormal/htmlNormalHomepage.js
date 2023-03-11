import { Link } from "react-router-dom";
import Header from "../htmlHeader";

function HtmlNormalHomepage() {
    return (
        <div>
        <Header title="HTML Course"></Header>
        <div className="container h-50 justify-content-center mt-5 text-color-secondary" style={{ width: "100%" }}>
        <div className="jumbotron my-auto">
        <h1 class="display-2">HTML-Srednji tečaj</h1>
        </div>
        <br></br>

        <hr></hr>
        <div className="text-center mt-5">
        <Link to='/html/NormalCourse'>
        <button type="button" class="btn btn-success btn-lg">Tečaj</button>&nbsp;&nbsp;
        </Link>
        <Link to='/html/NormalQuestions'>
        <button type="button" class="btn btn-danger btn-lg">Vprašanja</button>
        </Link>
        </div>
        <br></br>
        <hr></hr>

        <div className="text-center mt-5">
        <img src="/htmlSlika.png" alt="asd" className="container w-50 center" />
        </div>


  
        </div>

        </div>        
    );

}
export default HtmlNormalHomepage;