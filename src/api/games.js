import axios from 'axios'

const date = new Date().toLocaleDateString("sv-SE");

const games = axios.create({
      baseURL: 'https://balldontlie.io/api/v1/games'
})

export default games;