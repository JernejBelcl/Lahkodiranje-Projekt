import { Link } from "react-router-dom";
import Header from "../htmlHeader";

function HtmlNormalCourse() {
    return (
        <div>
            
        <Header title="HTML Course"></Header>
        <div className="container h-50 justify-content-center mt-5 text-color-secondary" style={{ width: "100%" }}>
        <div className="jumbotron my-auto">
        <h1 class="display-2">HTML-Srednji primeri</h1>
        </div>
        <br></br>

        <hr></hr>
        <div className="text-center mt-5">
        <Link to='/html/Normal'>
        <button type="button" class="btn btn-success btn-lg">Nazaj</button>&nbsp;&nbsp;
        </Link>
        <Link to='/html/NormalQuestions'>
        <button type="button" class="btn btn-danger btn-lg">Vprašanja</button>
        </Link>
        </div>
        <br></br>
        <hr></hr>

        <br></br>
        <p class="h2">Srednji ukazi:</p>

        <hr></hr>
        <pre>
        <code><b>{`<i> in </i>`}</b></code><code>{` z njim spremenimo izgled besedila v italic (predstavlja pomembno besedilo)`}</code><br></br><br></br>
        <code><b>{`<b> in </b>`}</b></code><code>{` z njim poudarimo besedilo (bold)`}</code><br></br><br></br>
        <code><b>{`<ol> in </ol>`}</b></code><code>{` urejen seznam (elementi oštevilčeni)`}</code><br></br><br></br>
        <code><b>{`<ul> in </ul>`}</b></code><code>{` neurejen seznam (elementi neoštevilčeni)`}</code><br></br><br></br>
        <code><b>{`<li> in </li>`}</b></code><code>{` z njim označimo element seznama`}</code><br></br><br></br>
        <code><b>{`<nav> in </nav>`}</b></code><code>{` poseben odsek besedila, po navadi se uporablja kot blok za več povezav (link)`}</code><br></br><br></br>
        <code><b>{`<pre> in </pre>`}</b></code><code>{` besedilo znotraj te značke bo prikazano enako kot je napisano (upošteva presledke, nove vrstice…)`}</code><br></br><br></br>
        <code><b>{`<table> in </table>`}</b></code><code>{` značka za izdelavo tabele`}</code><br></br><br></br>
        <code><b>{`<tr> in </tr>`}</b></code><code>{` predstavlja vrstico v tabeli`}</code><br></br><br></br>
        <code><b>{`<td> in </td>`}</b></code><code>{` predstavlja poudarjen stolpec v tabeli (uporabljen za naslove tabele)`}</code><br></br><br></br>
        <code><b>{`<th> in </th>`}</b></code><code>{` predstavlja stolpec v tabeli`}</code><br></br><br></br>
        <code><b>{`<style> in </style>`}</b></code><code>{` značka za vstavljanje CSS kode v HTML dokument`}</code><br></br><br></br>
        <code><b>{`<q> in </q>`}</b></code><code>{` značka za citiranje besedila`}</code><br></br><br></br>
        </pre>
        <hr></hr>

        <br></br>
        <p class="h2">Primeri uporabe:</p>

        <hr></hr>
        <pre>
        <code>{`<p><i>Postrani besedilo</i> je naš ponos in uspeh.</p>`}</code><br></br><br></br>
        <code>{`<style>
  div {background-color: lightblue; text-align: center;}
  table {border: 1px solid;}
</style>
`}</code><br></br><br></br>
        <code>{`<ol>
  <li>Uvod</li>
  <li>Jedro</li>
  <li>Zaključek</li>
</ol>
`}</code><br></br><br></br>
        <code>{`<table>
  <tr>
    <th>Ime</th>
    <th>Priimek</th>
  </tr>
  <tr>
    <td>Janez</td>
    <td>Novak</td>
  </tr>
  <tr>
    <td>Metka</td>
    <td>Novak</td>
  </tr>
</table>
`}</code><br></br><br></br>
        <code>{`<nav>
  <a href="/css/">CSS</a>
  <a href="/sql/">SQL</a>
  <a href="/c#/">C#</a>
</nav>
`}</code><br></br>
        </pre>
        <hr></hr>


  
        </div>

        </div>        
    );

}
export default HtmlNormalCourse;

