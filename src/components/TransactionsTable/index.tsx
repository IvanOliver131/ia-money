import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { Container } from "./styles";

export function TransactionsTable() {
  // Pega as transactions direto do contexto
  const { transactions } = useContext(TransactionsContext);
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
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
                  {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.amount))}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  );
}