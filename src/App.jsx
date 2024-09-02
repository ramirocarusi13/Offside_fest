import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./pages/Main"
import MainRouter from './routes/MainRouter'
import { BrowserRouter } from 'react-router-dom'



export default function App() {
  return (
    <> 
      <Header />
      <BrowserRouter >
            <MainRouter />
      </BrowserRouter>
      <Footer />
    </>
  )
}


