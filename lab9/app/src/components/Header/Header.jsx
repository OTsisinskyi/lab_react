import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.header_section}>
                <div className={style.name}>ParkLviv</div>
            </div>
            <div className={style.header_section}>
                <div><NavLink className={`${style.item} ${style.active}`} to={'/home'}>Home</NavLink></div>
                <div><NavLink className={`${style.item} ${style.active}`} to={'/list'}>List</NavLink></div>
                <div><a className={style.item}>Card</a></div>
            </div>
        </div>
    );
}

export default Header
