import { Category, Manufacturer, Product } from "../models/index.js";

const product = {
  list: async (request, response) => {
    const productsList = await Product.findAll({
      include: Category
    });

    return response.status(200).json(productsList);
  },

  read: async (request, response) => {
    const user = await getUser({ id: request.params.id }, );

    return response.status(200).json(user);
  },

  create: async (request, response) => {
    const { name, price, quantify, manufacturer_id, category_id } = request.body;

    console.log(request.body)

    const { newProduct } = await Product.create({
      name,
      price,
      quantify,
      manufacturer_id,
    });

    const category = await Category.findByPk(category_id);

    await newProduct.setCategory(category);

    request.status(201).json(newProduct);
  },

  update: async (request, response) => {
    const { id } = req.params;
    const { name, price, quantify } = request.body;

    // 400 - Bad request.
    if (!id) return request.status(400).json("Id não enviado")
    
    const productUpdate = await Products.update({
      name,
      price,
      quantify,
    }, 
    {
      where: {
        id
      }
    })

    response.status(200).json("Produto Atualizado")
  },

  delete: async (request, response) => {
    try {
      const { id } = request.params;

      await Products.destroy({
        where: {
          id,
        }
      });
  
      request.status(204);
    
    } catch(error) {
      return response.status(500).json("Ocorreu algum problema")
    }
  }
};

export default product;
