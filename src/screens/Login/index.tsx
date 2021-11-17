import React, { useState, useContext, ChangeEvent} from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/UserContext';
import * as C from './styles';
import { Theme } from '../../components/Theme';


export const Login = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSignClick = () => { 
        if(email != '' && password != '') {
            history.push('/ItemList');
        } else {
            alert("Preencha os campos!");
        }
        
    }   

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    return (
    <Theme color={'#FFD836'}>
        <C.Container>
            <C.Header>Agenda de Churras</C.Header>
            <C.Area>                
                <label>
                    <p>Login</p>
                    <input 
                        type="email"
                        placeholder="e-mail"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        autoFocus
                    />
                </label>
                <label>
                    <p>Senha</p>
                    <input 
                        type="password"
                        placeholder="senha"
                        name="password"
                        value={password}
                        //onChange={t=>setPassword(t)}
                    />
                </label>
                <button onClick={handleSignClick}>Entrar</button>
            </C.Area>                 
        </C.Container>
    </Theme>              
    );
}