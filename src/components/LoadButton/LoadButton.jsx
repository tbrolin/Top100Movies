import PropTypes from 'prop-types'
import ReactLoading from 'react-loading'

export default function LoadButton({ isLoading, onClick }) {
  return (
    <>
      <div className='load-button'>
        {isLoading && <ReactLoading type='bubbles' />}
        {!isLoading && (
          <button type='button' onClick={onClick}>
            Discover...
          </button>
        )}
      </div>
      <style jsx>{`
        .load-button {
          flex: 1;
          margin-inline: auto;
          display: flex;
          align-items: center;
        }
        .load-button button {
          background-color: #232323;
          border-radius: 10px;
          border: 3px solid var(--secondary-text);
          color: var(--secondary-text);
          font-size: 32px;
          outline: none;
          padding: 10px 30px;
        }
        .load-button button:hover {
          background-color: #333333;
          color: var(--primary-color);
        }
        .load-button button:focus {
          background-color: var(--secondary-text);
        }
        .load-button button:active {
          color: #efefef;
          border-width: 2px;
        }
      `}</style>
    </>
  )
}

LoadButton.propTypes = {
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
}
