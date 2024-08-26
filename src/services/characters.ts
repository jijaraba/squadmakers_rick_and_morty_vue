import { get } from '@/services/api';


export enum CharacterSearchDataFormGender {
  All = 'all',
  Unknown = 'unknown',
  Female = 'female',
  Male = 'male',
  Genderless = 'genderless',
}

interface ICharacterSearchData {
  page: number;
  search: string;
  gender: CharacterSearchDataFormGender;
  characterIds?: string[];
}

export class CharacterSearchData implements ICharacterSearchData{
  constructor(
      page: number,
      search: string,
      gender: CharacterSearchDataFormGender,
      characterIds: string[] = []
  ) {
    this.page = page;
    this.search = search;
    this.gender = gender;
    this.characterIds = characterIds;
  }

  toQueryParam(): string {
    let buffer = '';

    const ids = this.characterIds.length ? this.characterIds.join(',') : '';
    if (ids !== '') {
      buffer += ids;
    }

    buffer += `?page=${this.page}`;

    if (this.search !== '') {
      buffer += `&name=${this.search}`;
    }

    if (this.gender !== CharacterSearchDataFormGender.All) {
      buffer += `&gender=${this.gender}`;
    }

    return buffer;
  }
}

export const handleGetCharacters = async (search: CharacterSearchData) => {
  try {
    return await get({
      url: `/character/${search.toQueryParam()}`,
    });
  } catch (error) {
    return undefined;
  }
};
