export default class Card {
  constructor (title, description, image, badgeList = []) {
    this.title = title
    this.description = description
    this.image = image
    this.badgeList = badgeList
  }
}
