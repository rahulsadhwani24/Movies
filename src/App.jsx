import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MovieStream from "./Components/MovieStream";
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:movieId" element={<MovieStream />} />
    </Routes>
  )
}

export default App