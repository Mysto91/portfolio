import link from '../../class/link'

export default class menuLink extends link {
  constructor (title, content, url, active = false) {
    super(url)
    this.title = title
    this.content = content
    this.active = active
  }
}
