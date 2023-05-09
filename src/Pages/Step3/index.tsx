import React from "react";
import Theme from "../../Components/Theme";
import * as C from "./styles";
import { FormAction, useForm } from "../../Context/FormContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Step3 = () => {
  const { state, dispatch } = useForm();
  const navigate = useNavigate();

  React.useEffect(() => {
    if(state.name !== ''){
      dispatch({
        type: FormAction.setCurrentValue,
        payload: 3
      })
    }else{
      navigate('/')
    }
  }, [])

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.setEmail,
      payload: e.target.value,
    });
  };

  const handleChangeGithub = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.setGithub,
      payload: e.target.value,
    });
  };

  const handleComplete = () => {
    console.log(state);
  };

  return (
    <Theme>
      <C.Container>
        <span>Passo 3/3</span>
        <h2>Agora coloque os seus contatos</h2>
        <span>Coloque o seu e-mail e o github para entrarmos em contato</span>

        <input
          type="text"
          placeholder="Digite seu e-mail aqui"
          onChange={handleChangeEmail}
        />

        <input
          type="text"
          placeholder="Digite seu github aqui"
          onChange={handleChangeGithub}
        />

        <Link to='/step2'>Voltar</Link>
        <button onClick={handleComplete}>Proximo</button>
      </C.Container>
    </Theme>
  );
};

export default Step3;
