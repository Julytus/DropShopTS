import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import { OffCanvasProvider } from './components/offcanvas/OffCanvasContext';

/**
 * App - Component gốc của ứng dụng
 * Bọc OffCanvasProvider để đảm bảo tất cả component con có thể sử dụng offcanvas
 */
function App() {
  return (
    <OffCanvasProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </OffCanvasProvider>
  );
}

export default App;
