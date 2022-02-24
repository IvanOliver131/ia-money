import { createContext, ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import moment from 'moment';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// Ele possui propriedades children dentro dele entao 
// temos que fazer isso para parar de dar erro 
interface TrasactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

type DashParams = {
  id: string;
}

type FirebaseTransactions = Record<string, {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}>

// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'amount'>

export const TransactionsContext = createContext<TransactionsContextData>(
  // forçamos o tipo dele
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TrasactionProviderProps) {
  const { user } = useAuth();
  const params = useParams<DashParams>();
  const dashId = params.id;
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // useEffect(() => {
  //   api.get('transactions')
  //     .then(response => setTransactions(response.data.transactions))
  // }, []);

  useEffect(() => {
    const dashRef = database.ref(`dashboards/${dashId}`);

    dashRef.on('value', dash => {
      const dashRoom = dash.val();
      const firebaseTransactions: FirebaseTransactions = dashRoom.transactions ?? {};

      const parsedQuestions = Object.entries(firebaseTransactions).map(([key, value]) =>{  
        return {
          id: value.id,
          title: value.title,
          amount: value.amount,
          type: value.type,
          category: value.category,
          createdAt: value.createdAt,
        }
      });
      
      setTransactions(parsedQuestions);      
    });

    // Desta forma ele remove todos os eventListener desta sala do value
    return () => {
      dashRef.off('value');
    }
  }, [dashId, user?.id]);

  async function createTransaction(transactionInput: TransactionInput) {  
    // ANTES DE UTILIZAR O FIREBASE //
    // const response = await api.post('/transactions', { 
    //  ...transactionInput,
    //   createdAt: new Date()
    // })
    // const { transaction } = response.data;
  
    // setTransactions([ 
    //   ...transactions, 
    //   transaction
    // ]);
    //////////////////////////////////

    if (!user) {
      throw new Error('You must be logged in');
    }

    const transaction = {
      id: Math.random(),
      ...transactionInput,
      createdAt: moment().format('DD/MM/YYYY')
    }

    await database.ref(`dashboards/${dashId}/transactions`).push(transaction);
    
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
