import {Button} from "react-bootstrap";

const IntroHeaderButton = (props) => {
    return (
        <Button
            style={{backgroundColor: "green", width: "100px", height: "50px", fontSize: "20px", marginRight: "30px"}}>
            {props.name}
        </Button>

    );
};

export default IntroHeaderButton;