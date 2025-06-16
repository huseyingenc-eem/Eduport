import { Routes, Route,Navigate } from "react-router-dom";


import Layout from "@/layout/Layout";
import Features from "@/pages/ Features";
import './App.css'


function App() {

  return (
      <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/features" replace />} />
              <Route path="/features" element={<Features />} />
              {/* Diğer sayfalar */}
          </Route>
      </Routes>
  )
}

export default App
