import { useState } from "react";
import { NewEditTransactionModal } from "../NewEditTransactionModal";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";


export function Dashboard() { 
  const [isNewEditTransactionOpen, setIsNewEditTransactionOpen] = useState(false);
  const [transactionId, setTransactionId] = useState(0);

  function handleCloseEditTransactionModal() {
    setIsNewEditTransactionOpen(false);   
  }

  function handleOpenEditTransactionModal(transactionId: number) {
    setTransactionId(transactionId);
    setIsNewEditTransactionOpen(true);
  }

  return (
    <Container>
      <Summary />
      <TransactionsTable onOpenEditModal={handleOpenEditTransactionModal}/>

      <NewEditTransactionModal
        isOpen={isNewEditTransactionOpen}
        selectedId={transactionId}
        onRequestClose={handleCloseEditTransactionModal}
      />
    </Container>
  );
}