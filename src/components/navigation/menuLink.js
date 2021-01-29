import Link from '../../class/Link'

export default class menuLink extends Link {
  constructor (title, content, url, active = false) {
    super(url)
    this.title = title
    this.content = content
    this.active = active
  }
}
