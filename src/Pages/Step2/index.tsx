import React from "react";
import Theme from "../../Components/Theme";
import * as C from "./styles";
import { FormAction, useForm } from "../../Context/FormContext";
import { useNavigate } from "react-router-dom";
import SelectOption from "../../Components/SelectOption";
import { Link } from "react-router-dom";

const Step1 = () => {
  const { state, dispatch } = useForm();
  const navigate = useNavigate();

  React.useEffect(() => {
    if(state.name !== ''){
      dispatch({
        type: FormAction.setCurrentValue,
        payload: 2
      })
    }else{
      navigate('/')
    }
  }, [])

  const handleChangeLevel = (value: number) => {
    dispatch({
      type: FormAction.setLevel,
      payload: value
    })
  }

  const handleNextPage = () => {
    if (state.name !== "") {
      navigate("/step3");
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <Theme>
      <C.Container>
        <span>Passo 2/3</span>
        <h2>{state.name}, qual é o seu nível de experiencia?</h2>
        <span>Selecione a opcao que mais corresponde seu nível</span>

        <SelectOption
          title='Sou iniciante'
          description='Tenho menos de 2 anos de experiencia'
          icon='🥳'
          active={state.level === 0}
          handleChangeLevel={() => handleChangeLevel(0)}
        />

        <SelectOption
          title='Sou programador'
          description='Tenho 2 ou mais anos de experiencia'
          icon='😎'
          active={state.level === 1}
          handleChangeLevel={() => handleChangeLevel(1)}
        />

        <Link to='/'>Voltar</Link>
        <button onClick={handleNextPage}>Proximo</button>
      </C.Container>
    </Theme>
  );
};

export default Step1;
