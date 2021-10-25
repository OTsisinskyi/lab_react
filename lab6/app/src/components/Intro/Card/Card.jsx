

import {Card, Button} from "react-bootstrap";

const Cards = (props) =>{
    return(
        <Card style={{ width: '17rem', border:"1px solid green", backgroundColor: "#70a039", borderRadius:"20px"}}>
            <Card.Img variant="top" src={props.src} style={{borderRadius:"20px", border:"1px solid white"}} />
            <Card.Body>
                <Card.Title style={{color:"#ffe03c"}}>{props.title}</Card.Title>
                <Card.Text style={{color:"white"}}>
                    {props.text}
                </Card.Text>
                <Button variant="success" style={{border:"1px solid white"}}>Read more</Button>
            </Card.Body>
        </Card>
    );
}

export default Cards