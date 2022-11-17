import { DataTypes } from "sequelize";

import db from "../database/index.js";

// Cria um objeto com padrão pascal-case que contém a primeira letra em maiúsculo.
const Manufacturer = db.define(
  "Manufacturer" /* No do módulo */,
  {
    // Descrição das colunas da tabela.
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    // Objeto de configurações.
    tableName: "manufacturer",
  }
);

export default Manufacturer;
