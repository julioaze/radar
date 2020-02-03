// importa o gerencador de rotas do express
const { Router } = require("express");
// importa o axios, responsavel por chamadas a API
const axios = require("axios");
// importa o modelo de dados que criamos para salvar o Dev
const Dev = require("./models/Dev");

const routes = Router();

routes.post("/devs", async (request, response) => {
  // console.log(request.body);
  // return response.json({ message: 'Olá, Julio' });

  // pega os dados que vem da requisição / CORPO DA REQUISIÇÃO
  const { github_username, techs, latitude, longitude } = request.body;

  // atribui a const apiReponse o valor do get na API do github
  const apiResponse = await axios.get(
    `https://api.github.com/users/${github_username}`
  );

  // console.log(apiResponse.data);

  // fazemos a desestruturação para pegar somente os valores que queremos,
  // retornados pela requisição do Axios
  const { name = login, avatar_url, bio } = apiResponse.data;

  console.log(name, avatar_url, bio, github_username);

  const techsArray = techs.split(",").map(tech => tech.trim());

  // Aqui usamos uma constante para representar a latitude e a longitude
  // no formato correto para ser persistido no MongoDB
  const location = {
    type: "Point",
    coordinates: [longitude, latitude]
  };

  // Grava as informações do Dev no Mongo
  const dev = await Dev.create({
    github_username,
    name,
    avatar_url,
    bio,
    techs: techsArray,
    location
  });

  // return response.json({ message: 'Olá, Julio'});
  return response.json(dev);
});

module.exports = routes;
