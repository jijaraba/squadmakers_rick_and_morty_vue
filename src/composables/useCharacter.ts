import { reactive, toRefs } from 'vue';
import {ICharacter, ICharacterResponse} from "../models/ICharacter.ts";
import {CharacterSearchData, handleGetCharacters} from "../services/characters.ts";

export function useCharacter() {
  const state = reactive({
    characters: <ICharacter[]>[],
    loadingCharacters: false,

  });
  const getCharacters = async (searchData: CharacterSearchData) => {
    state.loadingCharacters = true;

    const data: ICharacterResponse[] = await handleGetCharacters(searchData);

    if (data.results && data.results.length > 0) {
      state.characters = data.results;
    } else {
      state.characters = [];
    }

    state.loadingCharacters = false;
  };


  return {
    ...toRefs(state),
    getCharacters,
  };
}
