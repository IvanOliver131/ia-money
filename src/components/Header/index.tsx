import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/useAuth';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  async function handleLogout() {
    await signOut();

    navigate('/');
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="ia money" />]
        <span onClick={handleLogout}>Sair</span>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>    
      </Content>
    </Container>
  );  
}