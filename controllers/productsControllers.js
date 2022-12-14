import { Category, Manufacturer, Product } from "../models/index.js";

const product = {
  list: async (request, response) => {
    const productsList = await Product.findAll({
      include: Category,
      attributes: ['name', 'price', 'quantify', 'manufacturer_id']
    });

    return response.status(200).json(productsList);
  },

  read: async (request, response) => {
    const { id } = request.params

    // 400 - Bad request.
    if (!id) return request.status(400).json("Id não enviado")

    const user = await Product.findOne({
      id: id,
      include: Category,
      attributes: ['name', 'price', 'quantify', 'manufacturer_id']
    });

    return response.status(200).json(user);
  },

  create: async (request, response) => {
    const { name, price, quantify, manufacturer_id, category_id } = request.body;

    const newProduct = await Product.create({
      name,
      price,
      quantify,
      manufacturer_id,
    });

    const category = await Category.findByPk(category_id);

    // Special methods
    await newProduct.setCategories(category);

    return response.status(201).json(newProduct);
  },

  update: async (request, response) => {
    const { id } = request.params;
    const { name, price, quantify } = request.body;

    // 400 - Bad request.
    if (!id) return request.status(400).json("Id não enviado")
    
    const productUpdate = await Product.update({
      name,
      price,
      quantify,
    }, 
    {
      where: {
        id
      }
    })

    return response.status(200).json("Produto Atualizado")
  },

  delete: async (request, response) => {
    //try {
      const { id } = request.params;

      // 400 - Bad request.
      if (!id) return request.status(400).json("Id não enviado")

      await Product.destroy({
        where: {
          id,
        }
      });
  
      return request.status(204);
    
    /*} catch(error) {
      return response.status(500).json("Ocorreu algum problema")
    }*/
  }
};

export default product;
