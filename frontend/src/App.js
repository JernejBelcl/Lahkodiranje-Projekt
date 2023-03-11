import './App.css';
import './index.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useState} from "react";
import {UserContext} from "./userContext";
import Home from "./components/Home";
import HomeCplusPlus from "./components/cPlusPlus/cPlusPlusHomepage";
import HomeCplusPlusEasy from "./components/cPlusPlus/cPlusPlusEasy";
import HomeCplusPlusMedium from "./components/cPlusPlus/cPlusPlusMedium";
import HomeCplusPlusHard from "./components/cPlusPlus/cPlusPlusHard";
import HomeSql from "./components/sql/HomeSql";
import HomeSqlEasy from "./components/sql/HomeSqlEasy";
import HomeSqlMedium from "./components/sql/HomeSqlMedium";
import HomeSqlHard from "./components/sql/HomeSqlHard";
import Navbar from "./components/sql/Navbar";
import HomeJS from './components/javascript/js-home';
import JSEasy from './components/javascript/js-easy';
import JSMedium from './components/javascript/js-medium';
import JSHard from './components/javascript/js-hard';
import { routes } from './routes';

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
                        <Route path={"/sql"} exact element={<HomeSql/>}></Route>
                        <Route path={"/sql/Easy"} exact element={<HomeSqlEasy/>}></Route>
                        <Route path={"/sql/Medium"} exact element={<HomeSqlMedium/>}></Route>
                        <Route path={"/sql/Hard"} exact element={<HomeSqlHard/>}></Route>
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
