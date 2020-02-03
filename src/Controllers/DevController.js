const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');

module.exports = {
  async index(request, response) {
    const devs = await Dev.find();

    return response.json(devs);
  },

  async store(request, response) {
      const { github_username, techs, latitude, longitude } = request.body;

      // verifica se o Dev já existe na base de dados para não cadastrar
      // em duplicidade
      // o uso do let é para que a variável seja sobreposta
      let dev = await Dev.findOne({ github_username });

      // se não existir, salva o novo Dev no Mongo
      if(!dev) {
          const apiResponse = await axios.get(
            `https://api.github.com/users/${github_username}`
          );

          const { name = login, avatar_url, bio } = apiResponse.data;            

          // vamos isolar a linha abaixo num arquivo dentro de 'utils'
          // para ser reutilizada onde for necessário. Dry
          // const techsArray = techs.split(",").map(tech => tech.trim());
          const techsArray = parseStringAsArray(techs);

          const location = {
            type: "Point",
            coordinates: [longitude, latitude]
          };

          dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
          });
      }        

      return response.json(dev);

  }
};