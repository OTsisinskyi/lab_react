import {Button} from "react-bootstrap";

const ReverseButton = (props) => {
    return (
        <Button onClick={props.reverse} style={{
            backgroundColor: "green",
            width: "200px",
            height: "50px",
            fontSize: "20px"
        }}>Reverse</Button>
    );
}
export default ReverseButton;