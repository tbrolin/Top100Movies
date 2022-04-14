import { createClient, Provider } from 'urql'
import Page from './components/Page'
import PageFoot from './components/PageFoot'

const client = createClient({
  url: `https://${location.host}/graphql`,
})

function App() {
  return (
    <>
      <Provider value={client}>
        <h1>Top 100 Movies</h1>
        <Page />
        <PageFoot />
      </Provider>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
        body {
          --primary-text: #ff6700;
          --secondary-text: #ff6700;
          background-color: #121212;
          color: var(--primary-text);
          font-family: sans-serif;
          display: flex;
          margin: 0;
          padding: 0;
          justify-content: center;
        }
        h1 {
          font-size: 64px;
          font-family: 'Luckiest Guy', cursive;
          flex: 0;
          margin-inline: auto;
          color: var(--secondary-text);
        }
        #root {
          display: flex;
          flex: 1;
          flex-direction: column;
          height: 100vh;
        }
      `}</style>
    </>
  )
}

export default App
