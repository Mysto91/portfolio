import Link from '../../class/Link'

export default class SmallCircularLink extends Link {
  constructor (title, url) {
    super(url)
    this.title = title
  }
}
