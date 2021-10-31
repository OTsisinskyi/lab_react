import {Form} from "react-bootstrap";

const DropDown = () => {
    return (
        <Form.Select aria-label="Parameter" style={{marginRight: "30px", marginLeft: "30px", fontSize: "20px"}}>
            <option>Параметри</option>
            <option>Заснування</option>
            <option>Площа</option>
        </Form.Select>
    );
};

export default DropDown;