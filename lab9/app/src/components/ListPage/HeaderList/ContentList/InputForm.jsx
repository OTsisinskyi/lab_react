import {Form} from "react-bootstrap";

const InputForm = ({inputReader}) =>{
    return(
        <Form.Control
            type="text"
            placeholder="Пошук.." style={{width: "200px", marginRight: "30px"}}
            onChange={inputReader}/>
    )
}

export default InputForm