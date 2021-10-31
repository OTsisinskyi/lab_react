import {Button} from "react-bootstrap";

const IntroButton = (props) => {
    return (
        <Button
            style={{backgroundColor: "green", width: "200px", height: "50px", fontSize: "20px", marginBottom: "30px"}}>
            {props.name}
        </Button>

    );
};

export default IntroButton;