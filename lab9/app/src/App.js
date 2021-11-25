import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Intro from "./components/HomePage/Intro";
import {BrowserRouter, Route} from "react-router-dom";
import ListPage from "./components/ListPage/ListPage";
import {useEffect, useState} from "react";
import axios from "axios";
import cardData from "./data/myData";


function App() {
    const [array, setArray] = useState(() => []);
    useEffect(() =>{
        axios.get(" http://127.0.0.1:5000/park")
            .then(result => {
                setArray(result.data)
            }).catch((error)=>{
            console.log(error)
        })
    }, []);
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Route path={'/home'} render={() => <Intro parkData={array}/>}/>
                <Route path={'/list'} render={() => <ListPage parkData={array}/>}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;