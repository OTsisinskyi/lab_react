import style from "./Intro.module.css"
import Cards from "../Card";
import IntroButton from "./IntroButton";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";


const Intro = ({parkData}) => {
    let threeCardData = parkData.slice(0, 3)
    let park = threeCardData.map(element => <Cards id={element.id}
                                                   src={element.src}
                                                   title={element.title}
                                                   text={element.text}
                                                   age={element.age}
                                                   square={element.square}/>)
    return (
        <div className={style.intro}>
            <div className={style.introduction}>
                <div>
                    <img className={style.photo} src="https://media.istockphoto.com/videos/
					park-with-green-lawn-video-id144265599?s=640x640"/>
                </div>
                <div className={style.text}>
                    <h1 className={style.title}>ParkLviv</h1>
                    <p className={style.paragraph}>Живеш у Львові, гуляєш по паркам, і нічого незнаєш про них<br/>
                        Тут ти зможеш переглянути усі парки, і взнати про них <span
                            className={style.more}>більше!</span></p>
                </div>
            </div>

            <div className={style.content}>
                <p className={style.mostFamousPark}>Найбільш відомі парки Львова..</p>
                <div className={style.card}>
                    {park}
                </div>
                <div className={style.button}>
                    <NavLink to={"/list"}>
                        <IntroButton name={"View more"}/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
export default Intro