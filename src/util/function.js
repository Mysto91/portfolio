import Badge from '../class/Badge'
import Card from '../class/Card'
import Row from '../class/Row'

/**
 * Convert json data into cards list
 *
 * @param string json
 *
 * @return array
 */
export const getCardList = (json) => {
  return json.map((card) =>
    new Card
    (
      card.title,
      card.description,
      card.image,
      Array.isArray(card.badgeList) ? card.badgeList.map((badge) => new Badge(badge.title, badge.color)) : []
    )
  )
}

export const getRowList = (json) => {
  return json.map((row) => {
    return new Row(
      row.title,
      row.level
    )
  })
}
