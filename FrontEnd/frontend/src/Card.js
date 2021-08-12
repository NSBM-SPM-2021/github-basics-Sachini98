import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col
} from 'reactstrap';

import img6 from './img5.jpg';
import {useState} from "react";

const Cards = () => {
    const [title, setTitle] = useState('Title');
    return (
        <CardGroup>
            <Card>
                    <CardImg top width="100%" src={img6} alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>{title}</CardTitle>
                </CardImgOverlay>
            </Card>

            <Card >
                <CardImg top width="100%" src={img6} alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>{title}</CardTitle>
                </CardImgOverlay>
            </Card>
            <Card>
                <CardImg top width="100%" src={img6} alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>{title}</CardTitle>
                </CardImgOverlay>
            </Card>
            <Card>
                <CardImg top width="100%" src={img6} alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>{title}</CardTitle>
                </CardImgOverlay>
            </Card>
        </CardGroup>

    );
}

export default Cards;

