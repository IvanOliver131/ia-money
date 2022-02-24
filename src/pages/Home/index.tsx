import { useNavigate } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import { useAuth } from '../../hooks/useAuth';

import { Container } from './styles';
import { database } from '../../services/firebase';

export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateDash() {
    
    if (!user) {
      await signInWithGoogle();
    }

    const roomRef = database.ref('dashboards'); 
    let keyId;

    await roomRef.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        let key = childSnapshot.key;
        let data = childSnapshot.val();

        if (data.authorId.includes(user?.id) === true) {
          keyId = key;
        } 
      });
    });

    if (keyId) {
      navigate(`dashboard/${keyId}`);
      
      return;
    }
    
    const firebaseDash = await roomRef.push({
      authorId: user?.id
    })
    navigate(`/dashboard/${firebaseDash.key}`); 
  }
  
  return (
    <Container>
      <div id="page-auth">
        <aside>
          <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
          <strong>Analise suas transações</strong>
          <p>Verifique seus gastos e ganhos financeiros</p>
        </aside>
        <main>
          <div className="main-content">
            <img src={logoImg} alt="Letmeask" />
            <button onClick={handleCreateDash} className="create-room">
              <img src={googleIconImg} alt="Logo do Google"/>
              Entre utilizando o Google
            </button>
          </div>      
        </main>
      </div>
    </Container>
  )
}