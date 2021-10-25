import style from "./Intro.module.css"
import {Button} from "react-bootstrap";
import Cards from "./Card/Card";


const Intro = () => {
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
                        Тут ти зможеш переглянути усі парки, і взнати про них <span className={style.more}>більше!</span></p>
                </div>
            </div>

            <div className={style.content}>
                <div className={style.card}>
                    <Cards
                        src="https://upload.wikimedia.org/wikipedia/commons/0/00/%D0%A1%D1%82%D1%80%D0%B8%D0%B9%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%D0%9F%D0%B0%D1%80%D0%BA.JPG"
                        title="Стрийський парк"
                        text="Один із найстаріших і найгарніших парків Львова, пам'ятка садово-паркового мистецтва національного значення."/>
                    <Cards
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Lviv_Franko_Park_RB.jpg/375px-Lviv_Franko_Park_RB.jpg"
                        title="Парк Івана Франка"
                        text="Найстаріший та один з центральних парків міста, розташований перед головним корпусом університету ім. Івана Франка (будівля колишнього Галицького сейму)."/>
                    <Cards
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/%D0%9F%D0%B0%D1%80%D0%BA_%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%B8_%D1%83_%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%96_20.JPG/375px-%D0%9F%D0%B0%D1%80%D0%BA_%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%B8_%D1%83_%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%96_20.JPG"
                        title="Парк культури"
                        text="Ще один з центральних парків міста, розташований у Галицькому районі. Пам'ятка садово-паркового мистецтва місцевого значення (з 1984). "/>
                </div>
                <div className={style.buttom}>
                    <Button variant="success" className={style.viewmore}>View more...</Button>
                </div>
            </div>
        </div>
    );
}
export default Intro