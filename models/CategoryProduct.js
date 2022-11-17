import { DataTypes } from "sequelize";

import { Product } from "./index.js";
import { Category } from "./index.js";

import db from "../database/index.js";

// Cria um objeto com padrão pascal-case que contém a primeira letra em maiúsculo.
const CategoryProduct = db.define(
  "CategoryProduct" /* No do módulo */,
  {
    // Descrição das colunas da tabela.
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "id",
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
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
    tableName: "product_category",
  }
);

export { CategoryProduct };
