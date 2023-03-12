import { Link } from "react-router-dom";
import Header from "../cssHeader";

function CssNormalCourse() {
    return (
        <div>
        <Header title="CSS Course"></Header>
        <div className="container h-50 justify-content-center mt-5 text-color-secondary" style={{ width: "100%" }}>
        <div className="jumbotron my-auto">
        <h1 class="display-2">CSS-Srednji primeri</h1>
        </div>
        <br></br>

        <hr></hr>
        <div className="text-center mt-5">
        <Link to='/css/Normal'>
        <button type="button" class="btn btn-success btn-lg">Nazaj</button>&nbsp;&nbsp;
        </Link>
        <Link to='/css/NormalQuestions'>
        <button type="button" class="btn btn-danger btn-lg">Vprašanja</button>
        </Link>
        </div>
        <br></br>
        <hr></hr>

        <p class="h4">Zapisovanje lastnosti deluje po naslednjem principu:</p>
        <p class="h4"><code><b>{`SELEKTOR {LASTNOST: VREDNOST;}`}</b></code></p>

        <br></br>
        <p class="h2">Srednji ukazi:</p>

        <hr></hr>
        <pre>
        <code><b>{`.p {...}`}</b></code><code>{` Oblikovanje se navezuje na html elemente, ki vsebujejo class="p".`}</code><br></br><br></br>
        <code><b>{`#p {...}`}</b></code><code>{` Oblikovanje se navezuje na html elemente, ki vsebujejo id="p".`}</code><br></br><br></br>
        <code><b>{`p, h1 {...}`}</b></code><code>{` Oblikovanje se navezuje na html elemente p in vse elemente h1.`}</code><br></br><br></br>
        <code><b>{`p h1 {...}`}</b></code><code>{` Oblikovanje se navezuje na html elemente h, ki so starši elementom h1.`}</code><br></br><br></br>
        <code><b>{`input[type=text] {...}`}</b></code><code>{` Oblikovanje se navezuje na <input> elemente, ki so tipa text.`}</code><br></br><br></br>
        <code><b>{`a:link {...}`}</b></code><code>{` Oblikovanje se navezuje na posamezna stanja elementa. 
Ta stanja so link se navezuje na neobiskano povezavo, visited se navezuje na obiskano povezavo, 
hover za takrat ko miška lebdi na povezavo in active za takrat, ko kliknemo na povezavo.`}</code><br></br><br></br>
        </pre>
        <hr></hr>


  
        </div>

        </div>        
    );

}
export default CssNormalCourse;