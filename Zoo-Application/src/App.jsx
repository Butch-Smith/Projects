import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import Card from "./components/Card"
import DetailPage from "./pages/DetailPage"

function App() {

  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/animals/:id" element={<DetailPage />} />
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App