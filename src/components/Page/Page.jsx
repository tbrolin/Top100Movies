import LoadButton from '../LoadButton'
import useDiscoverPopular from '../../hooks/use-discover-popular'
import Movie from '../Movie/Movie'

export default function Page() {
  const [movies = [], isLoading, doFetch] = useDiscoverPopular()
  const onClick = () => {
    doFetch(true)
  }

  return (
    <>
      <div className='page'>
        {movies.map((movie, index) => (
          <Movie key={movie.id} index={index + 1} {...movie} />
        ))}
        {movies.length <= 0 && (
          <LoadButton isLoading={isLoading} onClick={onClick} />
        )}
      </div>
      <style jsx>{`
        .page {
          animation: fadeIn 1s;
          display: flex;
          flex: 1;
          gap: 20px;
          flex-direction: column;
          justify-content: space-between;
          overflow-y: auto;
          margin-block: 20px;
          margin-inline: auto;
        }
      `}</style>
    </>
  )
}
