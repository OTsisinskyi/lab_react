import Filter from "./HeaderList/ContentList/Filter";
import Catalog from "./HeaderList/ContentList/Catalog";
import ParkInfo from "./ParkInfo/ParkInfo";
import {Route} from "react-router-dom";


const ListPage = (props) => {
    let parkInfo = props.parkData.map(element => <ParkInfo id={element.id}
                                                           src={element.src}
                                                           title={element.title}
                                                           text={element.text}
                                                           age={element.age}
                                                           square={element.square}/>);
    return (
        <>
            <Filter parkData={props.parkData}/>
            <Route path="/list/1" render={() => [parkInfo[0]]}/>
            <Route path="/list/2" render={() => [parkInfo[1]]}/>
            <Route path="/list/3" render={() => [parkInfo[2]]}/>
            <Route path="/list/4" render={() => [parkInfo[3]]}/>
            <Route path="/list/5" render={() => [parkInfo[4]]}/>
            <Route path="/list/6" render={() => [parkInfo[5]]}/>
        </>
    );
}

export default ListPage;