import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";

export function Redirect() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();

  useEffect(() => {
    async function redirect() {
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
  
      if (keyId !== undefined) {
        navigate(`/dashboard/${keyId}`);
  
        return;
      } 
  
      const firebaseDash = await roomRef.push({
        authorId: user?.id
      })
      
      navigate(`/dashboard/${firebaseDash.key}`);
    }

    redirect();
  });  
     
  return (
    <></>
  );
  
}