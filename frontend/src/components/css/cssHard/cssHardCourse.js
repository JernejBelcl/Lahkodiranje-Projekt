import { Link } from "react-router-dom";
import Header from "../cssHeader";

function CssHardCourse() {
    return (
        <div>
        <Header title="CSS Course"></Header>
        <div className="container h-50 justify-content-center mt-5 text-color-secondary" style={{ width: "100%" }}>
        <div className="jumbotron my-auto">
        <h1 class="display-2">CSS-Zahtevni primeri</h1>
        </div>
        <br></br>

        <hr></hr>
        <div className="text-center mt-5">
        <Link to='/css/Hard'>
        <button type="button" class="btn btn-success btn-lg">Nazaj</button>&nbsp;&nbsp;
        </Link>
        <Link to='/css/HardQuestions'>
        <button type="button" class="btn btn-danger btn-lg">Vprašanja</button>
        </Link>
        </div>
        <br></br>
        <hr></hr>

        <p class="h4">Zapisovanje lastnosti deluje po naslednjem principu:</p>
        <p class="h4"><code><b>{`SELEKTOR {LASTNOST: VREDNOST;}`}</b></code></p>

        <br></br>
        <p class="h2">Zahtevni ukazi:</p>

        <hr></hr>
        <pre>
        <code><b>{`position: static;`}</b></code><code>{` Namenjen je vrsti pozicioniranja na spletni strani. 
Poznamo static, kar pomeni, da je tam kjer je. Ta je edini, ki se ne uporablja za atributi left, right, top in botoom. 
Ostali pa so relative (relativna postavitev glede na normlano pozicijo), fixed (element je postavljen glede na vidno polje), 
absolute (relativna postavitev glede na najbližjega starša) in sticky (pri premikanju po strani, ne zgine, 
ponavadi ostane na vrhu ali na spodnem delu vidnega polja).`}</code><br></br><br></br>
        <code><b>{`left: 0;`}</b></code><code>{` Uporablja se pri pozicioniranju. Uporabljamo tudi top, right in bottom. 
Elemente predstavlja po ekranu glede na vrsto pozicioniranja. `}</code><br></br><br></br>
        <code><b>{`display: inline;`}</b></code><code>{` Spremenimo kako je prikazan element. Večina elementov je block ali inline. 
Torej ali so sami po sebi bloki, ali pa se postavljajo en zraven drugega. 
Prav tako poznamo none (da skrijemo element). 
!Pomembno v povezavi z display: block;! 
Če imamo sliko jo lahko horizontalno poravnamo z margin-left: auto; in margin right: auto;.`}</code><br></br><br></br>
        <code><b>{`body {
  counter-reset: section;
}

h2::before {
  counter-increment: section;
  content: "Sekcija " counter(section) ": ";
}
`}</b></code><code>{`Elementom h2 bomo nastavili na začetek napis Sekcija s zaporednim številom. 
Counter-reset ponastavi števec, na desni je ime števca. Counter-increment povečuje števec. 
Content pa je to kar bo izpisano v elementu. ::before takoj za elementom pomeni, da bomo delali na začetku elementa.
!Pozor v zgornjem primeru so značke <h2> znotraj značke body, v nasprotnem je potrebno ustrezno napisati značke.
`}</code><br></br><br></br>
        <code><b>{`div {
  width: 100px; 
  transition: width 2s;
}
div:hover {
  width: 300px;
}
`}</b></code><code>{`Elementu nastavimo tranzicijo. Prvo zapišemo lastnost, katero mislimo spreminjati. Nato pa trajanje. 
Če želimo zapisati več smeri naenkrat, jih napišemo zraven z vejico (npr.: width 2s, height 3s). Ta del zapišemo za navadni element. 
Vendarle pa moramo napisati skupaj z :hover pred elementom ki ga želimo spremeniti.
`}</code><br></br><br></br>
        <code><b>{`border: 1px solid red;`}</b></code><code>{` Ustvarimo rob debeline 1 piksel, rdeče barve in stil solid (trdna črta). 
Poznamo tudi druge stile in sicer dotted (pikčasta), dashed (črtasta), double (dvojna), none (brez) in še mnogo več.`}</code><br></br><br></br>
        </pre>
        <hr></hr>


  
        </div>

        </div>        
    );

}
export default CssHardCourse;