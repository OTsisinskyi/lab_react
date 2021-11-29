import HeaderList from "./HeaderList/ContentList/HeaderList";
import ContentList from "./HeaderList/ContentList/ContentList";
import ParkInfo from "./ParkInfo/ParkInfo";
import {Route} from "react-router-dom";


const ListPage = (props) => {
    let parkInfo = props.cardData.map(element => <ParkInfo id={element.id}
                                                           src={element.src}
                                                           title={element.title}
                                                           text={element.text}
                                                           age={element.age}
                                                           square={element.square}

    />);
    return (
        <>
            <HeaderList cardData={props.cardData}/>
            <Route path="/list/1" render={() => [parkInfo[0]]}/>
            <Route path="/list/2" render={() => [parkInfo[1]]}/>
            <Route path="/list/3" render={() => [parkInfo[2]]}/>
            <Route path="/list/4" render={() => [parkInfo[3]]}/>
            <Route path="/list/5" render={() => [parkInfo[4]]}/>
            <Route path="/list/6" render={() => [parkInfo[5]]}/>
            <Route path="/list/7" render={() => [parkInfo[6]]}/>
            <Route path="/list/8" render={() => [parkInfo[7]]}/>
            <Route path="/list/9" render={() => [parkInfo[8]]}/>
            <Route path="/list/10" render={() => [parkInfo[9]]}/>
            <Route path="/list/11" render={() => [parkInfo[10]]}/>
            <Route path="/list/12" render={() => [parkInfo[11]]}/>
            <Route path="/list/13" render={() => [parkInfo[12]]}/>
            <Route path="/list/14" render={() => [parkInfo[13]]}/>
            <Route path="/list/15" render={() => [parkInfo[14]]}/>
            <Route path="/list/16" render={() => [parkInfo[15]]}/>
            <Route path="/list/17" render={() => [parkInfo[16]]}/>
            <Route path="/list/18" render={() => [parkInfo[17]]}/>
            <Route path="/list/19" render={() => [parkInfo[18]]}/>
            <Route path="/list/20" render={() => [parkInfo[19]]}/>
            <Route path="/list/21" render={() => [parkInfo[20]]}/>
        </>
    );
}

export default ListPage;