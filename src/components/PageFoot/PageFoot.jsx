export default function PageFoot() {
  return (
    <>
      <div className='page-foot'>
        <img alt='tmdb-logotype' height='24' src='tmdb-logo.svg' />
        <p>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>
      <style jsx>{`
        .page-foot {
          border-block-start: 1px solid white;
          color: var(--secondary-text);
          display: flex;
          flex-direction: row;
          flex: 0;
          font-size: 24px;
          gap: 20px;
          justify-content: center;
          min-width: 100vw;
          padding-block: 20px;
        }
        .page-foot p {
          line-height: 1;
          margin: 0;
          paddig: 0;
        }
        .page-foot img {
          height: 24px;
        }
      `}</style>
    </>
  )
}
