import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Focus from '../assets/images/Focus.jpg';
import Personal from '../assets/images/Personal.jpg';
import WebApp from '../assets/images/Web Application.jpg';
import Card from './Card'


class Carousel extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Web Application Development',
                    subTitle: 'The cookbook for developers',
                    imgSrc: WebApp,
                    link: '*',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Mutsa Machingura',
                    subTitle: 'My LinkedIn',
                    imgSrc: Personal,
                    link: 'https://www.linkedin.com/in/mutsa-machingura-451379131',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Work',
                    subTitle: 'A social network for developers',
                    imgSrc: Focus,
                    link: 'https://github.com/mwmachingura/my-app-portfolio',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render () {
        return [

            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>

        ];
}
}

export default Carousel;