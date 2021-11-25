import {Button, Carousel, Col, Container, Row} from "react-bootstrap";
import Cards from "../../../Card";
import "./ContentList.css"


const Catalog = (props) => {
    let park = props.filteredParks.map(element => <Cards id={element.id}
                                                    src={element.src}
                                                    title={element.title}
                                                    text={element.text}
                                                    age={element.age}
                                                    square={element.square}/>)

    let threeParksEach = []
    for (let i = 0; i < park.length; i += 3) {
        threeParksEach.push(<Carousel.Item><Container><Row>{park.slice(i, i + 3).map(item => (
            <Col>{item}</Col>))} </Row></Container></Carousel.Item>);
    }
    return (
        <div>
            <Carousel interval={null}>
                {threeParksEach}
            </Carousel>
        </div>
    );
};

export default Catalog;