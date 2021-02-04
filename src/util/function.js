import Badge from '../class/Badge'
import Bullet from '../class/Bullet'
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
export const getCardList = (json) =>
  json.map((card) =>
    new Card
    (
      card.title,
      card.description,
      card.image,
      Array.isArray(card.badgeList) ? card.badgeList.map((badge) => new Badge(badge.title, badge.color)) : []
    )
  )

export const getRowList = (json) =>
  json.map((row) =>
    new Row(
      row.title,
      row.level
    )
  )

export const getMenuLinkList = (json) =>
  json.map((link) =>
    new MenuLink(
      link.title,
      link.logo,
      link.description,
      link.url,
      link.active
    )
  )

export const getBulletList = (json) =>
  json.map((bullet) =>
    new Bullet(
      bullet.title,
      bullet.description,
      bullet.version
    )
  )
