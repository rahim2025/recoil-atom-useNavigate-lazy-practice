import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
// import { Assignment1 } from './components/Assignment1'
const Assignment1 = lazy(()=> import("./components/Assignment1"))
// import { Assignment2 } from './components/Assignment2'
const Assignment2 = lazy(()=> import('./components/Assignment2'))
import { Navigate } from './components/navigate.jsx'



function App() {
  return (
    <BrowserRouter>
      <Navigate/>
      <Routes>
        
        <Route path="/assignment1" element={ <Suspense fallback={"...loading"}> <Assignment1 /> </Suspense>} />
        <Route path="/assignment2" element={ <Suspense fallback={"..loading"}><Assignment2 /></Suspense>  } />
        {/* <Assignment2 /> */}
        {/* <Assignment3 /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
