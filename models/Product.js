// Tabela de exemplo de criação de uma chave estrangeira (Foreign Key).

import { DataTypes } from "sequelize";

import db from "../database/index.js";
import { Manufacturer } from "./index.js";

// Cria um objeto com padrão pascal-case que contém a primeira letra em maiúsculo.
const Product = db.define(
  "Product" /* No do módulo */,
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
    price: {
      type: DataTypes.FLOAT,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    // Foreign Key que faz referência ao fabricante.
    manufacturer: {
      type: DataTypes.INTEGER,
      references: {
        model: Manufacturer,
        key: "id",
      },
    },
    createAt: {
      type: DataTypes.DATE,
    },
    updateAt: {
      type: DataTypes.DATE,
    },
  },
  {
    // Objeto de configurações.
    tableName: "product",
  }
);

export { Product };
