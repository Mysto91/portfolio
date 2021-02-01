import { getCardList } from '../util/function.js';

export const experienceCardList = getCardList(require('./json/experience.json'));
export const formationCardList = getCardList(require('./json/school.json'));