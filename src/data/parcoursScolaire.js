import Badge from '../class/Badge'
import Card from '../class/Card'

const json = require('./parcoursScolaire.json')

export const formationCardList = json.map((card) =>
  new Card
  (
    card.title,
    card.description,
    card.image,
    card.badgeList.map((badge) => new Badge(badge.title, badge.color))
  )
)
