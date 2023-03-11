import CPlusPlusHomepage from "./components/cPlusPlus/cPlusPlusHomepage";
import CPlusPlusEasy from "./components/cPlusPlus/cPlusPlusEasy";
import CPlusPlusMedium from "./components/cPlusPlus/cPlusPlusMedium";
import CPlusPlusHard from "./components/cPlusPlus/cPlusPlusHard";
import HomeJS from "./components/javascript/js-home";
import Home from "./components/Home";
import PythonHome from "./components/python/PythonHome";
import PythonEasy from "./components/python/PythonEasy";
import PythonMedium from "./components/python/PythonMedium";
import PythonHard from "./components/python/PythonHard";
import HomeSQL from "./components/sql/HomeSql"
import CssHomepage from "./components/css/cssHomepage";
import CssEasyHomepage from "./components/css/cssEasy/cssEasyHomepage";
import CssNormalHomepage from "./components/css/cssNormal/cssNormalHomepage";
import CssHardHomepage from "./components/css/cssHard/cssHardHomepage";
import HtmlHomepage from "./components/html/htmlHomepage";
import HtmlEasyHomepage from "./components/html/htmlEasy/htmlEasyHomepage";
import HtmlNormalHomepage from "./components/html/htmlNormal/htmlNormalHomepage";
import HtmlHardHomepage from "./components/html/htmlHard/htmlHardHomepage";
import CSharpHomepage from "./components/cSharp/cSharpHomepage";
import CSharpEasy from "./components/cSharp/cSharpEasy";
import CSharpMedium from "./components/cSharp/cSharpMedium";
import CSharpHard from "./components/cSharp/cSharpHard";




import HomeSqlEasy from "./components/sql/HomeSqlEasy";
import HomeSqlMedium from "./components/sql/HomeSqlMedium";
import HomeSqlHard from "./components/sql/HomeSqlHard";
export const routes = [
    {name: "Domov", to: "/", visible: true, element: <Home/>},
    
    {name: "C++", to: "/cPlusPlus", visible: true, element: <CPlusPlusHomepage/>},
    {name: "", to: "/cPlusPlus/Easy", visible: false, element: <CPlusPlusEasy/>},
    {name: "C++", to: "/cPlusPlus/Medium", visible: false, element: <CPlusPlusMedium/>},
    {name: "C++", to: "/cPlusPlus/Hard", visible: false, element: <CPlusPlusHard/>},

    {name: "C#", to: "/CSharp", visible: true, element: <CSharpHomepage/>},
    {name: "C#", to: "/CSharp/Easy", visible: false, element: <CSharpEasy/>},
    {name: "C#", to: "/CSharp/Medium", visible: false, element: <CSharpMedium/>},
    {name: "C#", to: "/CSharp/Hard", visible: false, element: <CSharpHard/>},


    {name: "JavaScript", to: "/js", visible: true, element: <HomeJS />},
    {name: "Python", to: "/Python", visible: true, element: <PythonHome/>},
    {name: "PythonEasy", to: "/Python/Easy", visible: false, element: <PythonEasy/>},
    {name: "PythonMedium", to: "/Python/Medium", visible: false, element: <PythonMedium/>},
    {name: "PythonHard", to: "/Python/Hard", visible: false, element: <PythonHard/>},

    {name: "SQL", to: "/sql", visible: true, element: <HomeSQL/>},
    {name: "SQLEasy", to: "/sql/Easy", visible: false, element: <HomeSqlEasy/>},
    {name: "SQLMedium", to: "/sql/Medium", visible: false, element: <HomeSqlMedium/>},
    {name: "SQLHard", to: "/sql/Hard", visible: false, element: <HomeSqlHard/>},

    {name: "CSS", to: "/CSS", visible: true, element: <CssHomepage/>},
    {name: "CSSEasy", to: "/CSS/Easy", visible: false, element: <CssEasyHomepage/>},
    {name: "CSSNormal", to: "/CSS/Normal", visible: false, element: <CssNormalHomepage/>},
    {name: "CSSHard", to: "/CSS/Hard", visible: false, element: <CssHardHomepage/>},
    {name: "HTML", to: "/html", visible: true, element: <HtmlHomepage/>},
    {name: "HTMLEasy", to: "/html/Easy", visible: false, element: <HtmlEasyHomepage/>},
    {name: "HTMLNormal", to: "/html/Normal", visible: false, element: <HtmlNormalHomepage/>},
    {name: "HTMLHard", to: "/html/Hard", visible: false, element: <HtmlHardHomepage/>},

]