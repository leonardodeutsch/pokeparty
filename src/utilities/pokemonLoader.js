import axios from "axios";

const pokemonLoader = (id) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      })
}

export default pokemonLoader;