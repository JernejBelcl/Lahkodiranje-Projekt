import './App.css';
import './index.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import {UserContext} from "./userContext";
import Home from "./components/Home";
import HomeCplusPlus from "./components/cPlusPlus/cPlusPlusHomepage";
import HomeCplusPlusEasy from "./components/cPlusPlus/cPlusPlusEasy";
import HomeCplusPlusMedium from "./components/cPlusPlus/cPlusPlusMedium";
import HomeCplusPlusHard from "./components/cPlusPlus/cPlusPlusHard";

import { routes } from './routes';

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
                        
                        <Routes>  
                            {routes.map(route=><Route path={route.to} exact element={route.element}></Route>)}
                            <Route path={"/"} exact element={<Home/>}></Route>
                            <Route path={"/cPlusPlus"} exact element={<HomeCplusPlus/>}></Route>
                            <Route path={"/cPlusPlus/Easy"} exact element={<HomeCplusPlusEasy/>}></Route>
                            <Route path={"/cPlusPlus/Medium"} exact element={<HomeCplusPlusMedium/>}></Route>
                            <Route path={"/cPlusPlus/Hard"} exact element={<HomeCplusPlusHard/>}></Route>
                        </Routes>
                    </UserContext.Provider>
                </BrowserRouter>
            </>
        );             
    


}

export default App;
