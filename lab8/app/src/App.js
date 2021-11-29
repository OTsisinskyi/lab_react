import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Intro from "./components/HomePage/Intro";
import {BrowserRouter, Route} from "react-router-dom";
import ListPage from "./components/ListPage/ListPage";

import cardData from "./data/myData"


function App(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Route path={'/home'} render={() => <Intro cardData={cardData}/>}/>
                <Route path={'/list/:id?'} render={() => <ListPage cardData={cardData}/>}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;