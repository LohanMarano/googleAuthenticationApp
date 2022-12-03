import { useState } from 'react';

import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { auth } from '../../services/firebase';

import './styles.scss';

export function SignIn() {
  const [user, setUser] = useState<User>({} as User);

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);

      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">

      <div className="user">
        {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}

        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <h1>Acesse sua conta</h1>

      <span>
       Para facilitar a vida do usuário, disponibilizamos a opção de realizar login <br />
        sem a necessidade de criar um cadastro, basta utilizar sua conta google!
      </span>

      <button type="button" onClick={signInWithGoogle} className="button">
      <img id="google-icon" src="https://img.icons8.com/fluency/48/null/google-logo.png"/> Entre com Google
      </button>
    </div>
  )
}