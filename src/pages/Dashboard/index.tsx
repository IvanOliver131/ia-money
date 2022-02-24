import { useState } from "react";
import { Header } from "../../components/Header";
import { Dashboard as DashboardComponnet } from "../../components/Dashboard";
import { NewTransactionModal } from "../../components/NewTransactionModal";
import { TransactionsProvider } from "../../contexts/TransactionsContext";

export function Dashboard() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false);   
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <DashboardComponnet />

      <NewTransactionModal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}