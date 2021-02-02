import { getCardList, getRowList } from '../util/function.js'

export const experienceCardList = getCardList(require('./json/experience.json'))
export const formationCardList = getCardList(require('./json/school.json'))
export const skillLanguageList = getRowList(require('./json/skillLanguage.json'))
