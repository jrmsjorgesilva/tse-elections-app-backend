import axios from "axios";
import { jsdom } from "jsdom";

const { JSDOM } = jsdom;

const endPointPokemonAPI = `https://pokeapi.co/api/v2/pokemon/ditto`;
const endPointRickAndMortyAPI = `https://rickandmortyapi.com/api/location/20`;
const endPointTranslationsXML = `https://api.funtranslations.com/translate/`;
const endPointCodeTogoAPI = `https://codetogo.io/api/users.xml`;

export const fetchPokemonData = async () => {
  try {
    const result = await axios.get(endPointPokemonAPI).then((res) => res.data);
    console.log("Resultado da API de Pokemons: ", result);
    return result;
  } catch (err) {
    console.error(err);
    console.log("Nâo foi possível realizar a busca na API de dados pokemon");
  }
};

export const fetchRickAndMortyData = async () => {
  try {
    const result = await axios
      .get(endPointRickAndMortyAPI)
      .then((res) => res.data);
    console.log("Resultado da API Rick and Morty: ", result);
  } catch (err) {
    console.error(err);
    console.log(
      "Não foi possível buscar dados da API Rick and Morty devido a um erro"
    );
  }
};

export const fetchTranslationData = async () => {
  try {
    global.DOMParser = new JSDOM().window.DOMParser;
    const parser = new DOMParser();
    const result = await axios
      .get(endPointTranslationsXML)
      .then((res) => res.data);
    const xmlDoc = parser.parseFromString(result, "text/xml");
    console.log("Resultado para API de tradução: ", xmlDoc);
  } catch (err) {
    console.error(err);
    console.log(
      "Não foi possível encontrar dados da API de Tradução devido a um erro"
    );
  }
};
