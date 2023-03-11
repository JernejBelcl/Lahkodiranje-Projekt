import Header from "./cssHeader";
import { Link } from "react-router-dom";

function CssHomepage() {
    return (
        <div>

        <hr></hr> 
        <div class="d-inline p-2 text-green"><b>Vas mogoče bolje zanima HTML?</b></div><span>
        <Link to='/html'>
        <button type="button" class="btn btn-success btn-sm">HTML-Tečaj</button></Link> </span>
        <hr></hr><br></br>  
        <Header title="CSS Course"></Header>
        <br></br>
        <div className="container h-50 justify-content-center mt-5 text-color-secondary" style={{ width: "100%" }}>
        <div className="jumbotron my-auto">
        <h1 class="display-2">Kaj je CSS?</h1>
        </div>
        <br></br>

     
        
        <div class="card " > 
        <p class="card-body">
        CSS (Cascading Style Sheets) je slogovna predloga, katera spletnemu brskalniku pove kako naj prikaže spletno stran 
        (je opisni jezik za oblikovanje). 
        </p><p class="card-body">
        Z uporabo slogov definiramo na kakšen način naj pregledovalnik oblikuje posamezne elemente spletne strani. 
        </p><p class="card-body">
        Oblikujemo lahko barvo, velikost, vrsto pisave, velikost tabele, odmike, poravnavo, vrstni red prikaza, barvo ozadja,
        robove…  
        </p><p class="card-body">
        Obliko lahko določimo celotni spletni strani, posamezni znački (tag) ali posameznemu elementu naše spletne strani. 
        </p>
        </div> <br></br>

        <div class="card " > 
        <h1 class="card-body"><ul class="card-body"><b>
        CSS lahko uporabimo na 3 načine. </b><div></div> <br></br>
        <li>
        {`Lahko vključimo CSS datoteko v HTML dokument (uporaba značke <link>)`} 
        </li>
        <li>
        {`Lahko napišemo CSS kodo znotraj značke <head> v HTML dokumentu (uporaba značke <style>)`}   
        </li>
        <li>
        {`Lahko napišemo CSS kodo znotraj HTML elementov (uporaba značke <style>)`}   
        </li>
        </ul>
        </h1>
        </div>

        <div className="jumbotron my-auto">
        <h1 class="display-4">Prikaz kode</h1>
        </div>
        <br></br>
        <pre><code>&lt;!DOCTYPE html&gt;</code><br></br>
        <code>&lt;html&gt;</code><br></br>
        <code>{"<head>"}</code><br></br>
        <code>{`<!-- Metapodatki... --> `}</code><br></br>
        <code>{`<meta charset="UTF-8">`}</code><br></br>
        <code>{`<title>Naslov strani</title>`}</code><br></br>
        <code>{`</head>`}</code><br></br>
        <code>{`<body>`}</code><br></br>
        <code>{`<!-- Vsebina spletne strani... -->`}</code><br></br>
        <code>{`</body>`}</code><br></br>
        <code>{`</html>`}</code><br></br>
        
        

        
        </pre>
        </div>

        </div>        
    );

}
export default CssHomepage;