import style from "./HeaderList.module.css"
import {Form} from "react-bootstrap"
import DropDown from "./DropDown/DropDown";
import IntroHeaderButton from "./Button";

const HeaderList = () => {
    return (
        <div className={style.header}>
            <div className={style.listPageFilter}>
                <div className={style.filter}>
                    <DropDown/>
                    <IntroHeaderButton name={"Sort"}/>
                </div>
                <div className={style.inputSearch}>
                    <Form.Control type="text" placeholder="Пошук.." style={{width: "200px", marginRight: "30px"}}/>
                    <IntroHeaderButton name={"Find"}/>
                </div>
            </div>
        </div>
    );
}

export default HeaderList;