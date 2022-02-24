// import { useState } from "react";

import Modal from "react-modal";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';

import { Dashboard } from "./pages/Dashboard";
import { Home } from './pages/Home';
// import { Dashboard } from "./components/Dashboard";
// import { Header } from "./components/Header";
// import { NewTransactionModal } from "./components/NewTransactionModal";
// import { TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  // const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  // function handleOpenNewTransactionModal() {
  //   setIsNewTransactionOpen(true);
  // }

  // function handleCloseNewTransactionModal() {
  //   setIsNewTransactionOpen(false);   
  // }

  return (
    <BrowserRouter>   
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard/:id" element={<Dashboard/>} />
        </Routes>
      </AuthContextProvider> 

      {/* Seta o style global */}
      <GlobalStyle/>
    </BrowserRouter>
    // <TransactionsProvider>
    //   <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
    //   <Dashboard />

    //   <NewTransactionModal 
    //     isOpen={isNewTransactionOpen}
    //     onRequestClose={handleCloseNewTransactionModal}
    //   />

    //   <GlobalStyle/>
    // </TransactionsProvider>
  );
}

