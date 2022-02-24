import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

import deleteImg from '../../assets/trash-alt.svg';
import editImg from '../../assets/edit.svg';

export function TransactionsTable() {
  // Pega as transactions direto do contexto
  const { transactions } = useTransactions();
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {transaction.createdAt}
                  {/* {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))} */}
                </td>
                <td>
                  <img src={deleteImg} alt="Apagar" />
                </td>
                <td>
                  <img src={editImg} alt="Editar" />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  );
}