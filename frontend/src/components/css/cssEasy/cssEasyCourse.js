import { Link } from "react-router-dom";
import Header from "../cssHeader";

function CssEasyCourse() {
    return (
        <div>
        <Header title="CSS Course"></Header>
        <div className="container h-50 justify-content-center mt-5 text-color-secondary" style={{ width: "100%" }}>
        <div className="jumbotron my-auto">
        <h1 class="display-2">CSS-Enostavni primeri</h1>
        </div>
        <br></br>

        <hr></hr>
        <div className="text-center mt-5">
        <Link to='/css/Easy'>
        <button type="button" class="btn btn-success btn-lg">Nazaj</button>&nbsp;&nbsp;
        </Link>
        <Link to='/css/EasyQuestions'>
        <button type="button" class="btn btn-danger btn-lg">Vprašanja</button>
        </Link>
        </div>
        <br></br>
        <hr></hr>

        <p class="h4">Zapisovanje lastnosti deluje po naslednjem principu:</p>
        <p class="h4"><code><b>{`SELEKTOR {LASTNOST: VREDNOST;}`}</b></code></p>

        <br></br>
        <p class="h2">Osnovni ukazi:</p>

        <hr></hr>
        <pre>
        <code><b>{`color: blue;`}</b></code><code>{` Elementu nastavimo barvo pisave na modro. 
Uporabi lahko rezervirane besede (blue), heksadecimalne vrednosti (#012345) ali pa z uporabo rgb(255,255,255)`}</code><br></br><br></br>
        <code><b>{`background-color: lightgrey;`}</b></code><code>{` Elementu nastavimo barvo ozadja na svetlo sivo. Poimenovanja delujejo podobno kot pri barvi pisave.`}</code><br></br><br></br>
        <code><b>{`font-size: 40px;`}</b></code><code>{` Velikost pisave nastavimo na 40 pikslov. Prav tako lahko uporabi em, kar je vrednost v pikslih/16.`}</code><br></br><br></br>
        <code><b>{`<font-style: normal;>`}</b></code><code>{` Pisavo označimo kot normalno različico sebe. Prav tako je lahko postrani (italic, oblique).`}</code><br></br><br></br>
        <code><b>{`font-weight: normal;`}</b></code><code>{` Pisava postane normalna ali pa odebeljena (bold).`}</code><br></br><br></br>
        <code><b>{`/* To je komentar */
<!-- These paragraphs will be red -->
`}</b></code><code>{` Tako zapisujemo komentarje. Zgornjega lahko uporabimo za večvrstične komentarje, spodnjega pa za enovrstične komentarje.`}</code><br></br><br></br>
        <code><b>{`opacity: 0.5;`}</b></code><code>{` Prosojnost elementa nastavimo na vrednost med 0 in 1.`}</code><br></br><br></br>
        <code><b>{`height: 200px;
width: 50%;
`}</b></code><code>{`Elementu nastavimo višino 200 pikslov in širino na 50%. V procentih se meri glede na starševki element.`}</code><br></br><br></br>
        <code><b>{`list-style-type: none;`}</b></code><code>{` Elementom <ul> lahko nastavimo sprednji znak. Možnosti je veliko, na primer disc, circle, none...`}</code><br></br><br></br>
        <code><b>{`margin: 50px;`}</b></code><code>{` Elementom nastavimo odmik od starševskega elementa za 50 pikslov na vseh straneh. 
Prav tako lahko posamezno postavljamo odmike z margin-left, margin-top, margin-bottom, in margin-right. `}</code><br></br><br></br>
        <code><b>{`padding: 50px;`}</b></code><code>{` Elementom nastavimo odmik od roba do telesa elementa za 50 pikslov na vseh straneh. 
Prav tako lahko posamezno postavljamo odmike z padding-left, padding-top, padding-bottom, in padding-right.

Vse številske atribute lahko podamo z atrubutom auto. 
`}</code><br></br><br></br>
        </pre>
        <hr></hr>
  
        </div>

        </div>        
    );

}
export default CssEasyCourse;