import style from "./HeaderList.module.css"
import {ChangeEvent, useEffect, useState} from "react";
import Catalog from "./Catalog";
import InputForm from "./InputForm";
import ReverseButton from "./ReverseButton";
import axios from "axios";
import SortParameter from "./SortParameter";
import {ClipLoader} from "react-spinners";


const Filter = (props) => {
    const [array, setArray] = useState(() => []);
    const [currentSortOrder, setCurrentSortOrder] = useState(() => 'asc')
    const [currentSortParameter, setCurrentSortParameter] = useState(() => 'Sort by...')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    debugger;
    const getItems = (sortParameters, sortOrder) => {
        axios.get(" http://127.0.0.1:5000/park?" + sortParameters + sortOrder)
            .then(result => {
                setArray(result.data)
            }).catch((error) => {
            console.log(error)
        })
        //setLoading(false)
    }

    useEffect(() => {
        getItems("parameter=Sort by...", "&order=asc")
    }, [])


    const inputReader = (event: ChangeEvent<HTMLInputElement>) => {
        const resultName: string = event.target.value;
        const filteredArray = array.filter(e => e.title.toLowerCase().includes(resultName.toLowerCase()));
        setArray(filteredArray)
        if (resultName === "") {
            setArray(props.parkData)
        }
    }

    const reverseItems = () => {
        setCurrentSortOrder(currentSortOrder === "asc" ? "desc" : "asc")
        getItems("&parameter=" + currentSortParameter,
            "&order=" + (currentSortOrder === "asc" ? "desc" : "asc"))
    }

    const sortItems = (parameter) => {
        setCurrentSortParameter(parameter)
        getItems("&parameter=" + parameter, "&order=" + currentSortOrder)
    }


    return (
        <div>
            <div className={style.header}>
                <div className={style.listPageFilter}>
                    <div className={style.filter}>
                        <SortParameter sortItems={sortItems}/>
                        <ReverseButton reverse={reverseItems}/>
                    </div>
                    <div className={style.inputSearch}>
                        <InputForm inputReader={inputReader}/>
                    </div>
                </div>
            </div>
            {
                loading ? <div className={style.clipLoader}>
                    <ClipLoader size={30} color={"#123abc"}/>
                    </div>
                    : <Catalog filteredParks={array}/>
                    }
                </div>
                );
            }

export default Filter;