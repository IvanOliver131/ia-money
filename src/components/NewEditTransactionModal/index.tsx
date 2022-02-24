import { FormEvent, useEffect, useState } from 'react';

import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface newEditTransactionModalProps {
  isOpen: boolean;
  selectedId: number;
  onRequestClose: () => void
}

export function NewEditTransactionModal({ isOpen, selectedId, onRequestClose }: newEditTransactionModalProps) {
  const { transactions, editTransaction } = useTransactions();
  
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  useEffect(() => {
    transactions.forEach((transaction) => {
      if(transaction.id === selectedId){
        setTitle(transaction.title);
        setAmount(transaction.amount);
        setCategory(transaction.category);
        setType(transaction.type);
      }
    })
  }, [selectedId, transactions])
  
  async function handleEditTransaction(event: FormEvent) {
    event.preventDefault();

    await editTransaction(selectedId, {
      title,
      amount,
      category,
      type
    });
    
    // Zero os campos antes de fechar o modal
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');

    // Fecho o modal
    onRequestClose();
  }

  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleEditTransaction}>
        <h2>Editar transação</h2>

        <input 
          placeholder="Titulo"
          value={title}
          // sempre que troca a informação do input troca a propriedade title
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          type="number"
          placeholder="Valor"
          value={amount}
          // sempre que troca a informação do input troca a propriedade title
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw'); }}  
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />       
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
          value={category}
          // sempre que troca a informação do input troca a propriedade title
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Confirmar
        </button>
      </Container>
    </Modal>
  );
}