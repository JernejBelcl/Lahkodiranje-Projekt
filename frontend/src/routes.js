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
import HomeSQL from "./components/sql/HomeSql";
import CssHomepage from "./components/css/cssHomepage";
import CssEasyHomepage from "./components/css/cssEasy/cssEasyHomepage";
import CssNormalHomepage from "./components/css/cssNormal/cssNormalHomepage";
import CssHardHomepage from "./components/css/cssHard/cssHardHomepage";
import CssEasyCourse from "./components/css/cssEasy/cssEasyCourse";
import CssEasyQuestions from "./components/css/cssEasy/cssEasyQuestions";
import CssNormalCourse from "./components/css/cssNormal/cssNormalCourse";
import CssNormalQuestions from "./components/css/cssNormal/cssNormalQuestions";
import CssHardCourse from "./components/css/cssHard/cssHardCourse";
import CssHardQuestions from "./components/css/cssHard/cssHardQuestions";
import HtmlEasyCourse from "./components/html/htmlEasy/htmlEasyCourse";
import HtmlEasyQuestions from "./components/html/htmlEasy/htmlEasyQuestions";
import HtmlNormalCourse from "./components/html/htmlNormal/htmlNormalCourse";
import HtmlNormalQuestions from "./components/html/htmlNormal/htmlNormalQuestions";
import HtmlHardCourse from "./components/html/htmlHard/htmlHardCourse";
import HtmlHardQuestions from "./components/html/htmlHard/htmlHardQuestions";
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
import JSEasy from "./components/javascript/js-easy";
import JSMedium from "./components/javascript/js-medium";
import JSHard from "./components/javascript/js-hard";

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
    {name: "JavaScript", to: "/js/easy", visible: false, element: <JSEasy />},
    {name: "JavaScript", to: "/js/medium", visible: false, element: <JSMedium />},
    {name: "JavaScript", to: "/js/hard", visible: false, element: <JSHard />},

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
    {name: "CSSEasyCourse", to: "/CSS/EasyCourse", visible: false, element: <CssEasyCourse/>},
    {name: "CSSEasyQuestions", to: "/CSS/EasyQuestions", visible: false, element: <CssEasyQuestions/>},
    {name: "CSSNormalCourse", to: "/CSS/NormalCourse", visible: false, element: <CssNormalCourse/>},
    {name: "CSSNormalQuestions", to: "/CSS/NormalQuestions", visible: false, element: <CssNormalQuestions/>},
    {name: "CSSHardCourse", to: "/CSS/HardCourse", visible: false, element: <CssHardCourse/>},
    {name: "CSSHardQuestions", to: "/CSS/HardQuestions", visible: false, element: <CssHardQuestions/>},

    {name: "HTML", to: "/html", visible: true, element: <HtmlHomepage/>},
    {name: "HTMLEasy", to: "/html/Easy", visible: false, element: <HtmlEasyHomepage/>},
    {name: "HTMLNormal", to: "/html/Normal", visible: false, element: <HtmlNormalHomepage/>},
    {name: "HTMLHard", to: "/html/Hard", visible: false, element: <HtmlHardHomepage/>},
    {name: "HTMLEasyCourse", to: "/html/EasyCourse", visible: false, element: <HtmlEasyCourse/>},
    {name: "HTMLEasyQuestions", to: "/html/EasyQuestions", visible: false, element: <HtmlEasyQuestions/>},
    {name: "HTMLNormalCourse", to: "/html/NormalCourse", visible: false, element: <HtmlNormalCourse/>},
    {name: "HTMLNormalQuestions", to: "/html/NormalQuestions", visible: false, element: <HtmlNormalQuestions/>},
    {name: "HTMLHardCourse", to: "/html/HardCourse", visible: false, element: <HtmlHardCourse/>},
    {name: "HTMLHardQuestions", to: "/html/HardQuestions", visible: false, element: <HtmlHardQuestions/>},
    //{name: "SQL", to: "/SQL", visible: true, element: <div>SQL</div>}
]