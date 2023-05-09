import { useForm } from "../../Context/FormContext";
import AsideItem from "../AsideItem";
import * as C from "./styles";
import { FaMale, FaFolder, FaEnvelope } from "react-icons/fa";

const Theme = ({ children }: { children: React.ReactNode }) => {
  const {state} = useForm() 

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          <h1>Sistema de cadastro</h1>
          <p>Faca seu cadastro e receba um emprego imediatamente</p>
        </C.Header>
        <C.Steps>
          <C.Sidebar>
            <AsideItem
              title="Pessoal"
              description="Nome completo do usuário"
              icon={<FaMale />}
              active={state.currentValue === 1}
              path='/'
            />
            <AsideItem
              title="Habilidade"
              description="Nivel de habilidade do usuario"
              icon={<FaFolder />}
              active={state.currentValue === 2}
              path='/step2'
            />
            <AsideItem
              title="Contato"
              description="Contatos do usuário"
              icon={<FaEnvelope />}
              active={state.currentValue === 3}
              path='/step3'
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};

export default Theme;
