import React from "react";
import S from "../Descricao./Descricao.jsx";

const Descricao = ({descricao}) => {
  return (
    <h2 className={S.descricao}>
      {descricao}
    </h2>
  );
};

export default Descricao
