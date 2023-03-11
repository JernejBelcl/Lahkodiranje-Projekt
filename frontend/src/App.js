import './App.css';
import './index.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import {UserContext} from "./userContext";

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
