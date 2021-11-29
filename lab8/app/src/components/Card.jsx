import {Button, Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Cards = (props) => {
    return (
        <Card style={{
            width: '21rem',
            height: "29rem",
            border: "1px solid green",
            backgroundColor: "#70a039",
            borderRadius: "20px",
            padding: "5px"
        }}>
            <Card.Img variant="top" src={props.src} style={{borderRadius: "20px", border: "1px solid white"}}/>
            <Card.Body>
                <Card.Title style={{color: "#ffe03c"}}>{props.title}</Card.Title>
                <Card.Text style={{color: "white", fontSize: "18px"}}>
                    <p>Заснування парку: {props.age} року</p>
                    <p>Площа: {props.square} га</p>
                </Card.Text>
                <NavLink to={"/list/" + props.id}>
                    <Button variant="success" style={{border: "1px solid white"}}>Read more</Button>
                </NavLink>
            </Card.Body>
        </Card>
    );
}

export default Cards