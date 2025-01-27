import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGNkN2UwZTJkYTEwOWIzNGYxYzhjMGIzNmYwMTM4MCIsIm5iZiI6MTczNzkzOTY5Ni45NjIsInN1YiI6IjY3OTZkYWYwM2Y3ZmNmNjdkMDhmNDIzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BaMGdUhZLGDiPtwYtzdSi75luiLYy91SkNVWmLTIR_A'
      },
})
export default instance;