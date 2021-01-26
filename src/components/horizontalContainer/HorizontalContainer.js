import React, { Component } from 'react'
import Card from '../card/Card'
import CardList from '../cardList/CardList';
import './HorizontalContainer.css'

export default class HorizontalContainer extends Component {
    render() {

        const cardList = [
            {
                'title' : 'montitre',
                'description' : 'madescription',
                'image' : 'monimage'
            },
            {
                'title' : 'montitre2',
                'description' : 'madescription',
                'image' : 'monimage'
            },
            {
                'title' : 'montitre3',
                'description' : 'madescription',
                'image' : 'monimage'
            }
        ];

        return (
            <div className="horizontal-container">
                <h1>&lt;Mon parcours/&gt;</h1>
                <CardList cardList={cardList} />
            </div>
        )
    }
}
