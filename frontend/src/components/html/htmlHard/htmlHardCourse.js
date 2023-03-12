import { Link } from "react-router-dom";
import Header from "../htmlHeader";

function HtmlHardCourse() {
    return (
        <div>
        <Header title="HTML Course"></Header>
        <div className="container h-50 justify-content-center mt-5 text-color-secondary" style={{ width: "100%" }}>
        <div className="jumbotron my-auto">
        <h1 class="display-2">HTML-Zahtevni primeri</h1>
        </div>
        <br></br>

        <hr></hr>
        <div className="text-center mt-5">
        <Link to='/html/Hard'>
        <button type="button" class="btn btn-success btn-lg">Nazaj</button>&nbsp;&nbsp;
        </Link>
        <Link to='/html/HardQuestions'>
        <button type="button" class="btn btn-danger btn-lg">Vprašanja</button>
        </Link>
        </div>
        <br></br>
        <hr></hr>

        <br></br>
        <p class="h2">Zahtevni ukazi:</p>

        <hr></hr>
        <pre>
        <code><b>{`<textarea> in </textarea>`}</b></code><code>{` značka za besedilo v več vrsticah`}</code><br></br><br></br>
        <code><b>{`<svg> in </svg>`}</b></code><code>{` značka katera nam omogoča uporabo grafičnih elementov`}</code><br></br><br></br>
        <code><b>{`<video> in </video>`}</b></code><code>{` značka za prikaz videoposnetkov na spletni strani`}</code><br></br><br></br>
        <code><b>{`<form> in </form>`}</b></code><code>{` značka se uporablja za ustvarjanje aktivnih obrazcev`}</code><br></br><br></br>
        <code><b>{`<label> in </label>`}</b></code><code>{` značka za uporabo tekstovnega besedila znotraj obrazca`}</code><br></br><br></br>
        <code><b>{`<input> in </input>`}</b></code><code>{` vnosno polje/element ki se uporablja znotraj aktivnega obrazca`}</code><br></br><br></br>
        <code><b>{`<datalist> in </datalist>`}</b></code><code>{` seznam kateri vsebuje več pripravljenih odgovorov oziroma izbir`}</code><br></br><br></br>
        <code><b>{`<option> in </option>`}</b></code><code>{` ena izmed izbir znotraj seznama`}</code><br></br><br></br>
        <code><b>{`<figure> in </figure>`}</b></code><code>{` značka za opis uporabljene slike`}</code><br></br><br></br>
        </pre>
        <hr></hr>

        <br></br>
        <p class="h2">Primeri uporabe:</p>

        <hr></hr>
        <pre>
        <code>{`<textarea id="1" name="uvodnoBesedilo" rows="5" cols="40">
Uporaba naše spletne strani je pravilna odločitev. 
Prihranite čas, denar in se naučite veliko novega. Pozabite na skrbi, saj vas vse naučimo mi.
</textarea>
`}</code><br></br><br></br>
        <code>{`<svg width="200" height="200">
<circle cx="40" cy="40" r="70" stroke="red" stroke-width="2" fill="blue" />
</svg>
`}</code><br></br><br></br>
        <code>{`<video width="600" height="400" controls>
  <source src="film.mp4" type="video/mp4">
  <source src="film.ogg" type="video/ogg">
  Vaš brskalnik ne podpira video formata.
</video>
`}</code><br></br><br></br>
        <code>{`<form action="/preusmeri.php">
<label for="ime">First name:</label><br>
<input type="text" id="ime" name="ime" value="Janez"><br>
<label for="lname">Priimek:</label><br>
<input type="text" id="priimek" name="priimek" value="Novak"><br>
<label for="username">Uporabniško ime:</label><br>
<input type="text" id="username" name="username"><br>
<label for="geslo">Geslo:</label><br>
<input type="password" id="geslo" name="geslo"><br>
<input type="submit" value="Submit">
</form>
`}</code><br></br><br></br>
        </pre>
        <hr></hr>


  
        </div>

        </div>        
    );

}
export default HtmlHardCourse;

