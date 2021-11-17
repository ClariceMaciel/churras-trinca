import { Item } from '../types/Item';

export const formatDate = (date:Date): string => {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}`;
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`; 