<script setup lang="ts">
import {onMounted, ref} from 'vue'
import home_header from '@/assets/images/home_header.png';
import rick_and_morty from '@/assets/images/rick_and_morty_logo.png';
import background_character from '@/assets/images/background_character.jpeg';
import {useCharacter} from "@/composables/useCharacter.ts";
import {CharacterSearchData, CharacterSearchDataFormGender} from "../services/characters.ts";
import {ICharacter} from "@/models/ICharacter.ts";


const {characters, getCharacters, loadingCharacters} = useCharacter();

const search = ref('');
const dialog = ref(false);
let characterSelected: ICharacter;

onMounted(() => {
  const searchData = new CharacterSearchData(
      1,
      '',
      CharacterSearchDataFormGender.All,
      []
  );
  getCharacters(searchData);
});

const filterCharactersByGender = (gender: CharacterSearchDataFormGender) => {
  const searchData = new CharacterSearchData(
      1,
      '',
      gender,
      []
  );
  getCharacters(searchData);
}

const filterCharactersByName = () => {
  console.log(search.value);
  const searchData = new CharacterSearchData(
      1,
      search.value,
      CharacterSearchDataFormGender.All,
      []
  );
  getCharacters(searchData);
}

const filterCharactersDelete = () => {
  search.value = '';
  const searchData = new CharacterSearchData(
      1,
      '',
      CharacterSearchDataFormGender.All,
      []
  );
  getCharacters(searchData);
}
const selectCharacter = (character: ICharacter) => {
  characterSelected = character;
  dialog.value = true;
}

</script>

<template>
  <section class="home_wrapper bg-white">
    <div class="home_wrapper__header">
      <img :src="home_header" alt="">
      <div class="home_wrapper__header__info">
        <img :src="rick_and_morty" alt="">
        <input @keypress="filterCharactersByName" v-model="search" type="text" placeholder="Search for characters..."
               class="bg-secondary-lighten-4 text-medium">
      </div>
    </div>
    <div class="home_wrapper__subheader">
      <nav>
        <ul class="text-medium">
          <li @click="filterCharactersByGender(CharacterSearchDataFormGender.All)">All</li>
          <li @click="filterCharactersByGender(CharacterSearchDataFormGender.Unknown)">Unknown</li>
          <li @click="filterCharactersByGender(CharacterSearchDataFormGender.Female)">Female</li>
          <li @click="filterCharactersByGender(CharacterSearchDataFormGender.Male)">Male</li>
          <li @click="filterCharactersByGender(CharacterSearchDataFormGender.Genderless)">Genderless</li>
        </ul>
      </nav>
    </div>
    <div class="home_wrapper__characters">
      <div v-if="loadingCharacters">
        <div class="home_wrapper__characters__loading">
          <div class="home_wrapper__characters__empty">
            <h2>Uh-oh!</h2>
            <p>¡Pareces perdido en tu viaje!</p>
            <button @click="filterCharactersDelete" class="bg-primary text-small primary-button mt-4">Eliminar filtros</button>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-if="characters.length > 0">
          <section class="home_wrapper__characters__cards">
            <div v-for="character in characters" :key="character.id" class="home_wrapper__characters__cards__card">
              <RickCard @click="selectCharacter(character)" :alive="character.status === 'Alive'" :location="character.location.name"
                        :gender="character.gender"
                        :name="character.name" :image="character.image" :species="character.species"></RickCard>
            </div>
          </section>
        </div>
        <div v-else>
          <div class="home_wrapper__characters__empty">
            <h2>Uh-oh!</h2>
            <p>¡Pareces perdido en tu viaje!</p>
            <button @click="filterCharactersDelete" class="bg-primary text-small primary-button">Eliminar filtros</button>
          </div>
        </div>
      </div>
    </div>
    <v-dialog v-model="dialog" width="400">
      <section class="character_detail_dialog">
        <div class="character_detail_dialog__header">
          <img :src="background_character" alt="">
        </div>
        <div class="character_detail_dialog__image">
          <img :src="characterSelected?.image" alt="">
        </div>
        <div class="character_detail_dialog__body">
          <h5>{{ characterSelected?.status }}</h5>
          <h3>{{characterSelected?.name}}</h3>
          <h5>{{ characterSelected?.species }}</h5>
          <div class="character_detail_dialog__body__info">
            <div  class="character_detail_dialog__body__info__wrapper">
              <h5>Gender</h5>
              <h3>{{ characterSelected?.gender }}</h3>
            </div>
            <div  class="character_detail_dialog__body__info__wrapper">
              <h5>Origin</h5>
              <h3>{{ characterSelected?.origin.name }}</h3>
            </div>
            <div  class="character_detail_dialog__body__info__wrapper">
              <h5>Location</h5>
              <h3>{{ characterSelected?.location?.name }}</h3>
            </div>
          </div>
        </div>
      </section>
    </v-dialog>
  </section>
</template>

<style scoped lang="scss">

.character_detail_dialog {
  background: white;

  &__header {
    height: 150px;
    width: 400px;

    img {
      height: 150px;
      width: 100%;
      object-fit: cover;
    }
  }

  &__image {
    margin: -60px auto 0px auto;
    height: 155px;
    width: 100%;
    position: absolute;
    top: 55%;
    left: 88%;
    transform: translate(-50%, -50%);
    > img {
      border-radius: 50%;
      border: 2px solid #fff;
      height: 100px;
      width: 100px;
      object-fit: cover;
    }
  }

  &__body {
    margin-top: 60px;
    text-align: center;
    h3 {
      font: {
        family: Montserrat,serif;
        size: 14px;
        weight: 500;
      }
      line-height: 19.5px;
    }

    h5 {
      font: {
        family: Montserrat,serif;
        size: 13px;
        weight: 300;
      }
      line-height: 19.5px;
    }

    &__info {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 20px;
      padding: 0 20px 20px;

      &__wrapper {
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 5px;
      }
    }
  }
}

.home_wrapper {
  width: 100%;

  &__header {
    position: relative;
    height: 400px;
    width: 100%;
    object-fit: cover;

    > img {
      height: 400px;
      width: 100%;
      object-fit: cover;

    }

    &__info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;

      > img {
        width: 400px;
        animation: slowScale 5s infinite ease-in-out;
        display: block;
      }

      > input {
        margin-top: 20px;
        padding: 10px;
        width: 100%;
        border: 1px solid white;
      }
    }
  }

  &__subheader {
    background: #F2F2F2;
    height: 80px;
    width: 100%;

    > nav {
      display: flex;
      align-items: center;
      justify-content: center;

      ul {
        height: 80px;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        li {
          width: 100px;
          list-style: none;
          cursor: pointer;
        }
      }
    }
  }


  &__characters {
    width: 80%;
    margin: 50px auto;

    &__loading {
      text-align: center;
      margin-top: 200px;
      font: {
        size: 20px;
        weight: 300;
      };
    }

    &__cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
      gap: 20px;
      padding: 0 20px 20px;

      &__card {
        border-radius: 10px;
        overflow: hidden;
      }
    }
  }


  @keyframes slowScale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05); /* Slightly larger */
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
