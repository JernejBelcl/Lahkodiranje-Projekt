import CPlusPlusHomepage from "./components/cPlusPlus/cPlusPlusHomepage";
import CPlusPlusEasy from "./components/cPlusPlus/cPlusPlusEasy";
import CPlusPlusMedium from "./components/cPlusPlus/cPlusPlusMedium";
import CPlusPlusHard from "./components/cPlusPlus/cPlusPlusHard";
import HomeJS from "./components/javascript/js-home";
import Home from "./components/Home";

export const routes = [
    {name: "Domov", to: "/", visible: true, element: <Home/>},
    
    {name: "C++", to: "/cPlusPlus", visible: true, element: <CPlusPlusHomepage/>},
    {name: "", to: "/cPlusPlus/Easy", visible: false, element: <CPlusPlusEasy/>},
    {name: "C++", to: "/cPlusPlus/Medium", visible: false, element: <CPlusPlusMedium/>},
    {name: "C++", to: "/cPlusPlus/Hard", visible: false, element: <CPlusPlusHard/>},

    {name: "C#", to: "/C#", visible: true, element: <div>C#</div>},
    {name: "JavaScript", to: "/js", visible: true, element: <HomeJS />},
    {name: "Python", to: "/Python", visible: true, element: <div>Python</div>},
    {name: "CSS", to: "/CSS", visible: true, element: <div>CSS</div>},
    {name: "HTML", to: "/HTML", visible: true, element: <div>HTML</div>},
    {name: "SQL", to: "/SQL", visible: true, element: <div>SQL</div>}
]