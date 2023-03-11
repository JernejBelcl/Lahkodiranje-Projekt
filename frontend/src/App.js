import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import {UserContext} from "./userContext";
import Home from "./components/Home";


import HomeCplusPlus from "./components/cPlusPlus/cPlusPlusHomepage";
import HomeCplusPlusEasy from "./components/cPlusPlus/cPlusPlusEasy";
import HomeCplusPlusMedium from "./components/cPlusPlus/cPlusPlusMedium";
import HomeCplusPlusHard from "./components/cPlusPlus/cPlusPlusHard";
import HtmlHomepage from "./components/html/htmlHomepage";
import CssHomepage from "./components/css/cssHomepage";
import HtmlEasyHomepage from "./components/html/htmlEasy/htmlEasyHomepage";
import HtmlEasyCourse from "./components/html/htmlEasy/htmlEasyCourse";
import HtmlEasyQuestions from "./components/html/htmlEasy/htmlEasyQuestions";
function App() {

    const [user, setUser] = useState(localStorage.user ? JSON.parse(localStorage.user) : null);
    const updateUserData = (userInfo) => {
        localStorage.setItem("user", JSON.stringify(userInfo));
        setUser(userInfo);
    }
  
        return (
            <BrowserRouter>
                <UserContext.Provider value={{user: user, setUserContext: updateUserData}}>
                    
                    <Routes>  
                        <Route path={"/"} exact element={<Home/>}></Route>
                        <Route path={"/cPlusPlus"} exact element={<HomeCplusPlus/>}></Route>
                        <Route path={"/cPlusPlus/Easy"} exact element={<HomeCplusPlusEasy/>}></Route>
                        <Route path={"/cPlusPlus/Medium"} exact element={<HomeCplusPlusMedium/>}></Route>
                        <Route path={"/cPlusPlus/Hard"} exact element={<HomeCplusPlusHard/>}></Route>
                        <Route path={"/html"} exact element={<HtmlHomepage/>}></Route>
                        <Route path={"/css"} exact element={<CssHomepage/>}></Route>
                        <Route path={"/html/EasyHomepage"} exact element={<HtmlEasyHomepage/>}></Route>
                        <Route path={"/html/EasyCourse"} exact element={<HtmlEasyCourse/>}></Route>
                        <Route path={"/html/EasyQuestions"} exact element={<HtmlEasyQuestions/>}></Route>

                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        );             
    


}

export default App;
