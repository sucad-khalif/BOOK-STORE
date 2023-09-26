import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Allbook from "./Allbook";
import Addbooks from "../pages/Addbooks";
import Register from "../pages/Register";
import Log from "../pages/Log";


function App(){
    <Routes>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/allbook" element ={<Allbook/>}/>
        <Route path="/addbooks" element = {<Addbooks/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/log" element = {<Log/>}/>

    </Routes>
}
export default App