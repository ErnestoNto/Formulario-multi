import React from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  active: boolean;
  path: string;
};

const AsideItem = ({ title, description, icon, active, path }: Props) => {
  return (
    <C.Container active={active}>
      <Link to={path}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div>
          <span className="icon">{icon}</span>
          <span className="circle"></span>
        </div>
      </Link>
    </C.Container>
  );
};

export default AsideItem;
