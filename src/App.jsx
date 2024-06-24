import Nav from './components/Nav.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
