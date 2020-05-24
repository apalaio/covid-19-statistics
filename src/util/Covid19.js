//API: "COVID-19" from api-sports
const rapidApiHost = "covid-193.p.rapidapi.com";
const rapidApiKey = "2d2ff03f3fmshbd98083a719febep19ed46jsn4ea6966a5231";
const headers = {
  "X-RapidAPI-Host": rapidApiHost,
  "X-RapidAPI-Key": rapidApiKey,
};

const Covid19 = {
  async getCountryList() {
    const endpointURL = "https://covid-193.p.rapidapi.com/countries";
    try {
      const response = await fetch(endpointURL, { headers: headers });
      const jsonResponse = await response.json();
      if (!jsonResponse.response) {
        return [];
      }
      return jsonResponse.response;
    } catch (e) {
      alert(e);
    }
  },
  async search(country) {
    const endpointURL = `https://covid-193.p.rapidapi.com/statistics?country=${country}`;

    try {
      const response = await fetch(endpointURL, { headers: headers });
      const jsonResponse = await response.json();
      return await jsonResponse.response;
    } catch (e) {
      alert(e);
    }
  },
};
export default Covid19;
