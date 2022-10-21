import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import './App.css';

import EspecialidadesPage from "./pages/EspecialidadesPage";
import HomePage from "./pages/HomePage";
import InformacionPage from "./pages/InformacionPage";
import QuienesPage from "./pages/QuienesPage";
import TalleresPage from "./pages/TalleresPage";
import TurnosPage from "./pages/TurnosPage";



function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="quienes" element={<QuienesPage />} />
          <Route path="especialidades" element={<EspecialidadesPage />} />
          <Route path="informacion" element={<InformacionPage />} />
          <Route path="talleres" element={<TalleresPage />} />
          <Route path="turnos" element={<TurnosPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>

    
  );
}


export default App;
