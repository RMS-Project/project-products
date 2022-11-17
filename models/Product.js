// Tabela de exemplo de criação de uma chave estrangeira (Foreign Key).

import { DataTypes } from "sequelize";

import db from "../database/index.js";
import Manufacturer from "./Manufacturer.js";

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
    quantify: {
      type: DataTypes.INTEGER,
    },
    // Foreign Key que faz referência ao fabricante.
    manufacturer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Manufacturer,
        key: "id",
      },
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
    tableName: "product",
  }
);

export default Product;
