import React, { Component } from 'react'
import card from '../../class/card'
import HorizontalContainer from '../horizontalContainer/HorizontalContainer'
import Presentation from '../presentation/Presentation'
import './Body.css'

export default class Body extends Component {
    render() {
        const cardList = [
            new card(
                `2013-2018`,
                `Ecole d'ingénieur généraliste dans laquelle j'ai pu découvrir l'ensemble des domaines de l'ingénierie.`,
                `/logo/logo-insa-cvl.png`
            ),
            new card(
                `2017-2018`,
                `Formation Ecossaise qui m'a enseigné les fondamentaux du développeur web.`,
                `/logo/logo-university-of-dundee.png`
            )
        ];

        const cardList2 = [
            new card(
                `2018-aujourd'hui`,
                `Orange Business Services`,
                `/logo/logo-obs.png`
            )
        ];

        return (
            <div>
                <Presentation />
                <HorizontalContainer title="Mon parcours scolaire" cardList={cardList} />
                <HorizontalContainer title="Mon parcours professionnel" cardList={cardList2} />
            </div>
        )
    }
}
