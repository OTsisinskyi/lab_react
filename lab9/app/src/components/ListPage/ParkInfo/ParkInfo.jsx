import style from "./ParkInfo.module.css"

const ParkInfo = (props) => {
    return (
        <div className={style.parkInfoContent}>
            <div className={style.mainContent}>
                <div className={style.foto}>
                    <img src={props.src}/>
                </div>
                <div className={style.mainInfo}>
                    <h2>{props.title}</h2>
                    <div className={style.someInfo}>
                        <p>Площа: {props.square} га</p>
                        <p>Заснуваня: {props.age} року </p>
                    </div>
                </div>
            </div>
            <div className={style.content}>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    );
}

export default ParkInfo;