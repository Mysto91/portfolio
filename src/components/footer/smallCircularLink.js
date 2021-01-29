import link from '../../class/link'

export default class smallCircularLink extends link {
  constructor (title, url) {
    super(url)
    this.title = title
  }
}
