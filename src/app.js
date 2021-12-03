import NotFound from "./404";
import Blank from "./blank";
import Buttons from "./buttons";
import Cards from "./cards";
import Charts from "./charts";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import ForgotPassword from "./forgot-password";
import Register from "./register";
import Tables from "./tables";
import Animation from "./utilities-animation";
import Border from "./utilities-border";
import Color from "./utilities-color";
import Other from "./utilities-other";
import Login from "./login";

function App(){
return(
    <>
    <BrowserRouter>    
    <Routes>    
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/buttons" element={<Buttons/>}/>
    <Route path="/blank" element={<Blank/>}/>
    <Route path="/cards" element={<Cards/>}/>
    <Route path="/notFound" element={<NotFound/>}/>
    <Route path="/forgotpassword" element={<ForgotPassword/>}/>
    <Route path="/charts" element={<Charts/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/tables" element={<Tables/>}/>
    <Route path="/utilities-animation" element={<Animation/>}/>
    <Route path="/utilities-border" element={<Border/>}/>
    <Route path="/utilities-color" element={<Color/>}/>
    <Route path="/utilities-other" element={<Other/>}/> 
    <Route path="/login" element={<Login/>}/>
    <Route path="*" element={<NotFound/>}/>
       
    </Routes>
    </BrowserRouter>
    </>
)
}

export default App;