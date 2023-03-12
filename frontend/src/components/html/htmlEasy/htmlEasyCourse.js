import { Link } from "react-router-dom";
import Header from "../htmlHeader";

function HtmlEasyCourse() {
    return (
        <div>
        <Header title="HTML Course"></Header>
        <div className="container h-50 justify-content-center mt-5 text-color-secondary" style={{ width: "100%" }}>
        <div className="jumbotron my-auto">
        <h1 class="display-2">HTML-Enostavni primeri</h1>
        </div>
        <br></br>

        <hr></hr>
        <div className="text-center mt-5">
        <Link to='/html/Easy'>
        <button type="button" class="btn btn-success btn-lg">Nazaj</button>&nbsp;&nbsp;
        </Link>
        <Link to='/html/EasyQuestions'>
        <button type="button" class="btn btn-danger btn-lg">Vprašanja</button>
        </Link>
        </div>
        <br></br>
        <hr></hr>

        <br></br>
        <p class="h2">Osnovni ukazi:</p>

        <hr></hr>
        <pre>
        <code><b>{`<!DOCTYPE html>`}</b></code><code>{` je osnovni ukaz s katerim povemo da je naša datoteka HTML dokument (končnica .html)`}</code><br></br><br></br>
        <code><b>{`<html> in </html>`}</b></code><code>{` predstavljata začetek in konec celotnega HTML dokumenta (vmes bo vsa koda)`}</code><br></br><br></br>
        <code><b>{`<head> in </head>`}</b></code><code>{` prestavljata del v katerem lahko določimo naslov HTML dokumenta (spletne strani), 
nabor znakov, dodamo skripte, povezave do knjižnic…`}</code><br></br><br></br>
        <code><b>{`<meta charset="UTF-8">`}</b></code><code>{` primer uporabe nabora znakov UTF-8 kateri vsebuje tudi vse znake slovenske abecede (č,š,ž).`}</code><br></br><br></br>
        <code><b>{`<body> in </body>`}</b></code><code>{` predstavlja del v katerega vnašamo zgradbo spletne strani (elemente spletne strani)`}</code><br></br><br></br>
        <code><b>{`<div> in </div>`}</b></code><code>{` predstavlja sekcijo nekega besedila, je osnovni element za besedilo`}</code><br></br><br></br>
        <code><b>{`<p> in </p>`}</b></code><code>{` predstavlja paragraf, za razliko od div-a doda pred in po paragrafu prazno vrstico`}</code><br></br><br></br>
        <code><b>{`<span> in </span>`}</b></code><code>{` predstavlja možnost dodajanja nekega elementa (del besedila) znotraj sekcije ali paragrafa`}</code><br></br><br></br>
        <code><b>{`<h1> in </h1>`}</b></code><code>{` (h2, h3, h4, h5, h6) oznake <h1> do <h6> se uporabljajo za definiranje HTML naslovov. 
<h1> predstavlja najpomembnejši naslov, <h6> pa najmanj pomemben`}</code><br></br><br></br>
        <code><b>{`<a> in </a>`}</b></code><code>{` z njim ustvarimo povezavo (link) do neke spletne strani`}</code><br></br><br></br>
        <code><b>{`<br> in </br>`}</b></code><code>{` z njim ustvarimo prelom vrstice`}</code><br></br><br></br>
        <code><b>{`<img>`}</b></code><code>{` z njim dodamo sliko na našo spletno stran`}</code><br></br><br></br>
        </pre>
        <hr></hr>

        <br></br>
        <p class="h2">Primeri uporabe:</p>

        <hr></hr>
        <pre>
        <code>{`<div>Peljem se skozi mesto in pozabim gledati na cesto.</div>`}</code><br></br><br></br>
        <code>{`<p>Čista cesta, zelena trava, več na <span><a href="https://www.wikipedia.com">Klikni me!</a></span> ali na drugi spletni strani.</p>`}</code><br></br><br></br>
        <code>{`<h1>Glavni naslov</h1>`}</code><br></br><br></br>
        <code>{`<h2>Podnaslov</h2>`}</code><br></br><br></br>
        <code>{`<img src="slika.jpg" alt="ni_slike" width="200" height="100">`}</code><br></br><br></br>
        <code>{`<a href="https://www.google.com">Klikni me!</a>`}</code><br></br>
        </pre>
        <hr></hr>
  
        </div>

        </div>        
    );

}
export default HtmlEasyCourse;

