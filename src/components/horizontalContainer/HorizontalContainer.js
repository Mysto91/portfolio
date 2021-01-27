import React, { Component } from 'react'
import CardList from '../cardList/CardList';
import './HorizontalContainer.css'

export default class HorizontalContainer extends Component {
    render() {

        const cardList = [
            {
                title: "2013-2018",

                description: `Ecole d'ingénieur généraliste 
                dans laquelle j'ai pu découvrir l'ensemble des domaines de l'ingénierie.`,

                image: '/logo/logo-insa-cvl.png'
            },
            {
                title: '2017-2018',

                description: `Formation Ecossaise 
                    qui m'a enseigné les fondamentaux du développeur web.`,

                image: '/logo/logo-university-of-dundee.png'
            }
        ];

        return (
            <div className="horizontal-container">
                <h1>&lt;Mon parcours scolaire/&gt;</h1>
                <CardList cardList={cardList} />
            </div>
        )
    }
}
