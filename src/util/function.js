import Badge from '../class/Badge'
import Card from '../class/Card'
import Row from '../class/Row'
import MenuLink from '../components/navigation/MenuLink'

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

export const getMenuLinkList = (json) => {
  return json.map((link) => {
    return new MenuLink(
      link.title,
      link.description,
      link.url,
      link.active
    )
  })
}
