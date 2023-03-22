import { Routes, Route } from "react-router-dom"
import Container from './components/Container'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Books from './pages/Books';
import Book from "./pages/Book";

function App() {
  
return <>
    <Header />
    <Container>
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/books/:id" element={<Book />}></Route>
            <Route path="/books" element={<Books />}></Route>
            <Route path="*" element={<NotFound />}></Route>

        </Routes>
    </Container>
    <Footer />

    



</>
  
}

export default App
