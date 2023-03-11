import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import {UserContext} from "./userContext";
import Home from "./components/Home";
import HomeCplusPlus from "./components/cPlusPlus/cPlusPlusHomepage";
import HomeCplusPlusEasy from "./components/cPlusPlus/cPlusPlusEasy";
import HomeCplusPlusMedium from "./components/cPlusPlus/cPlusPlusMedium";
import HomeCplusPlusHard from "./components/cPlusPlus/cPlusPlusHard";
import HomeJS from './components/javascript/js-home';
import JSEasy from './components/javascript/js-easy';
import JSMedium from './components/javascript/js-medium';
import JSHard from './components/javascript/js-hard';

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
                        <Route path="/js" exact element={<HomeJS />}></Route>
                        <Route path="/js/easy" exact element={<JSEasy />}></Route>
                        <Route path="/js/medium" exact element={<JSMedium />}></Route>
                        <Route path="/js/hard" exact element={<JSHard />}></Route>
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        );             
    


}

export default App;
