import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './routes/Router'
import Layout from './components/Layout'
import { MarginBottomContext } from './contexts/MarginBottomContext'
import { useState } from 'react'

function App() {
  const [marginBottomSize, setMarginBottomSize] = useState('small')

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <MarginBottomContext.Provider
        value={{ marginBottomSize, setMarginBottomSize }}
      >
        <Layout marginBottomSize={marginBottomSize}>
          <AppRouter />
        </Layout>
      </MarginBottomContext.Provider>
    </Router>
  )
}

export default App
