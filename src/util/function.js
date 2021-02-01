import Badge from '../class/Badge'
import Card from '../class/Card'

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
      card.badgeList.map((badge) => new Badge(badge.title, badge.color))
    )
  )
}
