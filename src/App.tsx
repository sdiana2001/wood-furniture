import './index.scss';
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
  <Routes>
      <Route path="/" element={<div>Главная страница</div>} />
      <Route path="/catalog" element={<div>Каталог мебели</div>} />
    </Routes>
  )
}

export default App
