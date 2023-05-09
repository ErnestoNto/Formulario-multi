import React from "react";
import * as C from "./styles";

type Props = {
  title: string;
  description: string;
  icon: string;
  active: boolean;
  handleChangeLevel: () => void;
};

const SelectOption = ({
  title,
  description,
  icon,
  active,
  handleChangeLevel,
}: Props) => {
  return (
    <C.Container active={active} onClick={handleChangeLevel}>
      <h3>{title}</h3> <span>{icon}</span>
      <p>{description}</p>
    </C.Container>
  );
};

export default SelectOption;
