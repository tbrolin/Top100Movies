import { useState } from 'react'
import { useQuery } from 'urql'

const query = `
  query {
    movies {
      id
      overview
      popularity
      title
    }
  }
`

export default function usePopularMoviesQuery() {
  const [doFetch, setDoFetch] = useState(false)
  const [{ data, fetching, error }] = useQuery({
    query,
    pause: !doFetch,
  })

  if (error) {
    console.error('ERROR:', error.message)
    return [[{ id: 'error', title: error.message }], false, () => {}]
  }

  return [data?.movies || [], fetching, setDoFetch]
}
