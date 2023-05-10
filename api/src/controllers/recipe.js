const axios = require("axios");
const { Diet, Recipe } = require("../db");
const { API_KEY, URL_SPOONACULAR } = process.env;
//extraer los detalles de la api
const get_ApiID = async (id) => {
    const apiID = await axios.get(`${URL_SPOONACULAR}/recipes/${id}/information?apiKey=${API_KEY}`)
    const detail = apiID.data;
   
    let recipeDetail = {
        id,
        name: detail.title,
        summary: detail.summary,
        score: detail.spoonacularScore,
        healthScore: detail.healthScore,
        image: detail.image,
        steps: detail.analyzedInstructions[0]?.steps.map(s => {
            return {
                number: s.number,
                step: s.step,
            }
        }),
        dish: detail.dishTypes,
        diets: detail.diets,
    }
    
    return recipeDetail;

}
//toma un ID de receta como argumento y devuelve un objeto que contiene información sobre la receta específica de la base de datos
const get_DataBaseID = async (id) => {
    return await Recipe.findByPk(id, {
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
}
// devuelve una lista de hasta 100 recetas de la API Spoonacular. Realiza una solicitud HTTP utilizando Axios a la API
const get_Api = async () => {
    const resApi = await axios.get(`${URL_SPOONACULAR}/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);

    const { results } = resApi.data;

    const infoApi = await results?.map((r) => {
        return {
            id: r.id,
            name: r.title,
            summary: r.summary,
            score: r.spoonacularScore,
            healthScore: r.healthScore,
            image: r.image,
            steps: r.analyzedInstructions[0]?.steps.map(s => {
                return {
                    number: s.number,
                    step: s.step,
                }
            }),
            diets: r.diets, 
            dish: r.dishTypes,
        }
    })
    return infoApi;
};
//evuelve una lista de todas las recetas de la base de datos, incluyendo información sobre las dietas asociadas a cada receta
const get_DataBase = async () => {
    return await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],
            }

        }
    });
}
//utiliza las funciones get_Api y get_DataBase para obtener todas las recetas disponibles, combinando los resultados de ambas funciones en una lista de objetos.
const get_AllRecipes = async () => {
    const getApi = await get_Api();
    const getDataBase = await get_DataBase();
    const all = getApi.concat(getDataBase);
    return all;
    
}


module.exports = { 
    get_AllRecipes,
    get_DataBase,
    get_Api,
    get_DataBaseID,
    get_ApiID,
}