import {Route, Routes} from "react-router-dom";
import './App.css';
import './icons.css';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Cases from "./pages/cases";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/Cases" element={<Cases/>}/>
                <Route path="/How-It-Works"/>
                <Route path="/Company"/>
                <Route path="/Research"/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )

}

export default App;
