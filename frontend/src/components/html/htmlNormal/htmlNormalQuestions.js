import { Link } from "react-router-dom";
import Header from "../htmlHeader";
import { useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Questions from "./Questions";

function HtmlNormalQuestions() {
    return (
        <div>
        <Header title="HTML Course"></Header>
        <div className="container h-50 justify-content-center mt-5 text-color-secondary" style={{ width: "100%" }}>
        <div className="jumbotron my-auto">
        <h1 class="display-2">HTML-Srednja Vprašanja</h1>
        </div>
        <br></br>

        <hr></hr>
        <div className="text-center mt-5">
        <Link to='/html/Normal'>
        <button type="button" class="btn btn-success btn-lg">Nazaj</button>&nbsp;&nbsp;
        </Link>
        <Link to='/html/NormalCourse'>
        <button type="button" class="btn btn-danger btn-lg">Tečaj</button>
        </Link>
        </div>
        <br></br>
        <hr></hr>
        <div className="jumbotron my-auto">
        <h1 class="display-4">Vprašanja:</h1>
        </div>

        </div><br></br>

        <Questions/>

        </div>        
    );

}
export default HtmlNormalQuestions;