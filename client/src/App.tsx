import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"
import { Route, Routes } from "react-router-dom";
import AddEditBookPage from "./features/books/page/AddEditBookPage";
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/add-book" element={<AddEditBookPage />} />
        <Route path="/edit-book/:id" element={<AddEditBookPage />} />
      </Routes>
    </>
  )
}

export default App
