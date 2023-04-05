import { BASE_URL } from '../utils/constValues';

export const getCharacters = (searchValue: string) =>
  fetch(`${BASE_URL}/character/?name=${searchValue}`).then((res) => {
    if (!res.ok) {
      throw Error('По вашему запросу ничего не найдено');
    }
    return res.json();
  });

export const getCharacterById = (id: number) =>
  fetch(`${BASE_URL}/character/${id}`).then((res) => {
    if (!res.ok) {
      throw Error('По вашему запросу ничего не найдено');
    }
    return res.json();
  });
