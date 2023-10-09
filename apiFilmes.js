import axios from 'axios'

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'content-type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjIzNzVkMTc5NDA0YTc3MTQwOTc3ZjliMWQxOGZhMSIsInN1YiI6IjYxNmRmNTBkMTNhMzIwMDA0NGRmM2UzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VvEwiST9IPJ7WCRldm3KJl3Ee_cDg4cSg0NefA4X0js'
    }
})

export default apiFilmes