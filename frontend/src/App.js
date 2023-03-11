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
import Footer from './components/Footer/Footer';

function App() {

    const [user, setUser] = useState(localStorage.user ? JSON.parse(localStorage.user) : null);
    const updateUserData = (userInfo) => {
        localStorage.setItem("user", JSON.stringify(userInfo));
        setUser(userInfo);
    }
  
        return (
            <>
                <BrowserRouter>
                <Header/>
                    <UserContext.Provider value={{user: user, setUserContext: updateUserData}}>
                        <main className='container'>
                        <Routes>  
                            {routes.map(route=><Route path={route.to} exact element={route.element}></Route>)}
                        </Routes>
                        </main>
                    </UserContext.Provider>
                    <Footer/>
                </BrowserRouter>
            </>
        );             
    


}

export default App;
