import Link from '../../class/Link'

export default class MenuLink extends Link {
  constructor (title, logo, content, url, active = false) {
    super(url)
    this.logo = logo
    this.title = title
    this.content = content
    this.active = active
  }
}
