import style from "./HeaderList.module.css"
import {Button, Form} from "react-bootstrap"
import {useState} from "react";
import ContentList from "./ContentList";
import {ChangeEvent} from "react";
import InputForm from "./InputForm";
import ReverseButton from "./ReverseButton";


const HeaderList = (props) => {
    const [array, setFilter] = useState(props.cardData);

    const inputReader = (event: ChangeEvent<HTMLInputElement>) => {
        const resultName: string = event.target.value;
        const filteredArray = array.filter(e => e.title.toLowerCase().includes(resultName.toLowerCase()));
        setFilter(filteredArray)
        if(resultName === ""){
            setFilter(props.cardData)
        }
    }

    const sortItems = (field) => {
        const sorted = Array.from(props.cardData);
        sorted.sort((a, b) => a[field] - b[field]);
        setFilter(sorted);
    };

    const reverseArray = () => {
        const reverseArr = Array.from(array);
        reverseArr.reverse()
        setFilter(reverseArr)
    }


    return (
        <div>
            <div className={style.header}>
                <div className={style.listPageFilter}>
                    <div className={style.filter}>
                        <Form.Select onChange={e => sortItems(e.target.value)}
                                     style={{marginRight: "30px", marginLeft: "30px", fontSize: "20px"}}>
                            <option>Сортувати за..</option>
                            <option value={"age"}>Заснування</option>
                            <option value={"square"}>Площа</option>
                        </Form.Select>
                        <ReverseButton reverse={reverseArray}/>
                    </div>
                    <div className={style.inputSearch}>
                       <InputForm inputReader={inputReader}/>
                    </div>
                </div>
            </div>
            <ContentList filteredParks={array}/>
        </div>
    );
}

export default HeaderList;