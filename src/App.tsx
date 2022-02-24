import Modal from "react-modal";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';

import { Dashboard } from "./pages/Dashboard";
import { Home } from './pages/Home';
import { Redirect } from "./pages/Redirect";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  return (
    <BrowserRouter>   
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Redirect/>} />
          <Route path="/dashboard/:id" element={<Dashboard/>} />
        </Routes>
      </AuthContextProvider> 

      {/* Seta o style global */}
      <GlobalStyle/>
    </BrowserRouter>
  );
}

