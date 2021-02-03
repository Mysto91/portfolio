import { getBulletList, getCardList, getMenuLinkList, getRowList } from '../util/function.js'

export const experienceCardList = getCardList(require('./json/experience.json'))
export const formationCardList = getCardList(require('./json/school.json'))
export const skillLanguageList = getRowList(require('./json/skillLanguage.json'))
export const menuLinkList = getMenuLinkList(require('./json/menuLink.json'))
export const frameworkBulletList = getBulletList(require('./json/framework.json'))
