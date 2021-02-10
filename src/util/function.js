import Badge from '../class/Badge'
import Bullet from '../class/Bullet'
import Card from '../class/Card'
import Row from '../class/Row'
import MenuLink from '../components/navigation/MenuLink'

/**
 * Convert json data into cards list
 *
 * @param {string} json
 *
 * @return {array}
 */
export const getCardList = (json) =>
  json.map(
    (card) =>
      new Card(
        card.title,
        card.description,
        card.image,
        Array.isArray(card.badgeList)
          ? card.badgeList.map((badge) => new Badge(badge.title, badge.color))
          : []
      )
  )

/**
 *
 * @param {string} json
 *
 * @return {array}
 */
export const getRowList = (json) =>
  json.map((row) => new Row(row.title, row.level))

/**
 *
 * @param {string} json
 *
 * @return {array}
 */
export const getMenuLinkList = (json) =>
  json.map(
    (link) =>
      new MenuLink(
        link.title,
        link.logo,
        link.description,
        link.url,
        link.active
      )
  )

/**
 *
 * @param {string} json
 *
 * @return {array}
 */
export const getBulletList = (json) =>
  json.map(
    (bullet) => new Bullet(bullet.title, bullet.description, bullet.version)
  )

/**
 *
 * @param {string} elementClicked
 *
 * @return {void}
 */
export const scroll = (elementClicked) => {
  const href = elementClicked.getAttribute('href')

  if (href) {
    const link = isScrollableLink(href) ? href.replace('#', '') : null
    const targetScroll = document.getElementById('id-' + link)

    if (targetScroll) { targetScroll.scrollIntoView({ behavior: 'smooth', block: 'center' }) }
  }
}

/**
 *
 * @param {array} arr1
 * @param {array} arr2
 *
 * @return {array}
 */
export const mergeArray = (arr1, arr2) => arr1.map(obj => arr2.find(o => o.title === obj.title) || obj)

/**
 *
 * @param {Event} event
 *
 * @return {number}
 */
export const getHeightPosition = (event) => event.target.scrollingElement.scrollTop

/**
 *
 * @param {string} link
 *
 * @return {boolean}
 */
export const isScrollableLink = (link) => link.includes('#')
