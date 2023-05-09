import React from "react";
import Theme from "../../Components/Theme";
import * as C from "./styles";
import { FormAction, useForm } from "../../Context/FormContext";
import { useNavigate } from "react-router-dom";

const Step2 = () => {
  const { state, dispatch } = useForm();
  const navigate = useNavigate();

  React.useEffect(() => {
      dispatch({
        type: FormAction.setCurrentValue,
        payload: 1
      })
  }, [])

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.setName,
      payload: e.target.value,
    });
  };

  const handleNextPage = () => {
    if (state.name !== "") {
      navigate("/step2");
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <Theme>
      <C.Container>
        <span>Passo 1/3</span>
        <h2>Vamos comerçar com o seu nome</h2>
        <span>Coloque o seu nome no campo abaixo</span>

        <input
          type="text"
          placeholder="Digite seu nome aqui"
          autoFocus
          onChange={handleChangeName}
        />

        <button onClick={handleNextPage}>Proximo</button>
      </C.Container>
    </Theme>
  );
};

export default Step2;
