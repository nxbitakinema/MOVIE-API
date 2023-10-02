import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/Store'

// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// component
import Header from './components/header/Header'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Provider store={store} >

        <Router>

          <Header />

          <div className="container">
            <Routes>  /* path = เส้นทาง url */
              <Route path='/' element={<Home />} />
              <Route path='/movie/:id' element={<MovieDetail />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </div>

          <Footer />

        </Router>
      </Provider>
    </div>
  )
}

export default App
