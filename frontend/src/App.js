import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import {UserContext} from "./userContext";
import Home from "./components/Home";


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

                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        );             
    


}

export default App;
