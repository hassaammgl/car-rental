const axios = require("axios");

export async function fetchCars() {
  const options = {
    method: "GET",
    url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    params: {
      model: "corolla",
      limit: "25",
    },
    headers: {
      "x-rapidapi-key": "7cff26938cmshc3d2bee6da169fap194ad0jsn0dd41274ece3",
      "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
