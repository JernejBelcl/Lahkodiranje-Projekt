import Header from "./htmlHeader";
import { Link } from "react-router-dom";

function HtmlHomepage() {
    return (
        <div>
        
        <hr></hr> 
        <div class="d-inline p-2 text-green"><b>Vas mogoče bolje zanima CSS?</b></div><span>
        <Link to='/css'>
        <i class='fa fa-external-link fa-lg'></i></Link> </span>
        <hr></hr><br></br>
        <Header title="HTML Course"></Header> 
  
        <div className="container h-50 justify-content-center mt-5 text-color-secondary" style={{ width: "100%" }}>
        <div className="jumbotron my-auto">
        <h1 class="display-2">Kaj je HTML?</h1>
        </div>
        <br></br>
        
        
        <div class="card " > 
        <p class="card-body">
        HTML (Hyper Text Markup Language) je osnovni opisni/označevalni jezik za gradnjo spletnih strani. 
        </p><p class="card-body">
        Je osnova vsakega spletnega dokumenta oziroma spletne aplikacije. 
        </p><p class="card-body">
        S pomočjo HTML zgradimo osnovno »zgradbo/strukturo« spletne strani. 
        </p><p class="card-body">
        Poleg tega lahko spreminjamo tip, velikost in stil pisave, vključujemo lahko slike, povezave, tabele, obrazce, sezname, videje…
        </p>
        </div> <br></br>

        <div class="card " > 
        <p class="card-body">
        HTML lahko izdelamo v vsakem urejevalniku besedil (Visual Studio Code, Notepad. Notepad++, Sublime Text…) 
        in poženemo na vsakem brskalniku (Chrome, Firefox, Safari, Edge, Opera, Brave…).
        </p>
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
export default HtmlHomepage;