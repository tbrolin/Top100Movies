import PropTypes from 'prop-types'

export default function Movie({ index, title, overview }) {
  return (
    <>
      <div className='movie'>
        <div className='index'>{index}</div>
        <div className='movie-title'>{title}</div>
        <div className='movie-overview'>{overview}</div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .movie {
          animation: fadeIn 1s;
          display: grid;
          margin-inline: auto;
          padding: 1em;
          gap: 0.5em;
          grid-template-columns: auto 1fr;
          grid-template-rows: min-content min-content;
          border: 2px solid var(--secondary-text);
          border-radius: 0.5em;
          width: 90%;
        }

        @media all and (min-width: 700px) {
          .movie {
            width: 50%;
          }
        }
        .index {
          grid-row: 1 / span 2;
          grid-column: 1;
          font-size: 32px;
          align-self: center;
          text-align: center;
          min-width: 2em;
        }
        .movie-title {
          grid-column: 2;
          font-weight: bold;
          font-size: larger;
        }
        .movie-overview {
          grid-column: 2;
          color: rgba(255 255 255 / 60%);
        }
      `}</style>
    </>
  )
}

Movie.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
}
