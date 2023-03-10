import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import {UserContext} from "./userContext";
import Home from "./components/Home";
<<<<<<< Updated upstream


=======
import HomeCplusPlus from "./components/cPlusPlus/cPlusPlusHomepage";
import HomeCplusPlusEasy from "./components/cPlusPlus/cPlusPlusEasy";
import HomeCplusPlusMedium from "./components/cPlusPlus/cPlusPlusMedium";
import HomeCplusPlusHard from "./components/cPlusPlus/cPlusPlusHard";
import HtmlHomepage from "./components/html/htmlHomepage";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
                        <Route path={"/cPlusPlus"} exact element={<HomeCplusPlus/>}></Route>
                        <Route path={"/cPlusPlus/Easy"} exact element={<HomeCplusPlusEasy/>}></Route>
                        <Route path={"/cPlusPlus/Medium"} exact element={<HomeCplusPlusMedium/>}></Route>
                        <Route path={"/cPlusPlus/Hard"} exact element={<HomeCplusPlusHard/>}></Route>
                        <Route path={"/html"} exact element={<HtmlHomepage/>}></Route>
>>>>>>> Stashed changes

                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        );             
    


}

export default App;
