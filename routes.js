import express from 'express';

// Controlador de usuários que conversa com o modelo
// "user" que faz comunicação com o banco de dados
import products from "./controllers/productsControllers.js";

const routes = express.Router();

routes.get("/products", products.list);
routes.get('/products/:id', products.read);
routes.post("/products", products.create);
routes.put("/products/:id", products.update);
routes.delete("/products/:id", products.delete);

export default routes;