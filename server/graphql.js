/* eslint-disable unicorn/prefer-module */
const process = require('process')
const express = require('express')
const path = require('path')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const cors = require('cors')
const axios = require('axios')
/* eslint-enable unicorn/prefer-module */

const MDB_URL = 'https://api.themoviedb.org/3/discover/movie'
const API_KEY = process.env?.API_KEY
const PORT = process.env.PORT || 4000
if (!API_KEY) {
  throw new Error(
    'ERROR: You have to to set the env variable API_KEY to your TMDB api key to be able to communicate with TMDB'
  )
}

const schema = buildSchema(`
  type Movie {
    id: String!
    title: String
    overview: String
    popularity: String
  }
  type Query {
    movies: [Movie]
  }
`)

function fetchMovies(page = 1) {
  const url = new URL(MDB_URL)
  url.searchParams.append('api_key', API_KEY)
  url.searchParams.append('sort_by', 'popularity.desc')
  url.searchParams.append('page', page)
  return axios.get(url.toString())
}

const root = {
  async movies() {
    const pages = [1, 2, 3, 4, 5].map(pageNo => {
      return fetchMovies(pageNo).then(response => {
        return response?.data?.results?.map(movie => {
          return {
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            popularity: movie.popularity,
          }
        })
      })
    })
    return Promise.all(pages).then(values => {
      return values.flat()
    })
  },
}

const app = express()
app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
)

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT)
console.info('Server running...')
