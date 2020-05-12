//API: COVID-19 from api-sports
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
      console.log(`response from getCountryList : `, { jsonResponse });
      // console.log(`response from getCountryList : `, { jsonResponse.response });
      if (!jsonResponse.response) {
        return [];
      }
      return jsonResponse.response;
    } catch (error) {
      console.log(error);
    }
  },
  async search(country) {
    const endpointURL = `https://covid-193.p.rapidapi.com/statistics?country=${country}`;

    try {
      const response = await fetch(endpointURL, { headers: headers });
      const jsonResponse = await response.json();
      console.log(`return from API: `, { jsonResponse });
      return await jsonResponse.response;
    } catch (e) {
      alert(e);
    }

    //     {countryStats: Array(1)}
    // countryStats: Array(1)
    // 0:
    // cases:
    // active: 1449
    // critical: 40
    // new: "+126"
    // recovered: 1508
    // total: 3382
    // __proto__: Object
    // country: "Algeria"
    // day: "2020-04-26"
    // deaths:
    // new: "+6"
    // total: 425
    // __proto__: Object
    // tests:
    // total: 6500
    // __proto__: Object
    // time: "2020-04-26T20:00:05+00:00"
    // __proto__: Object
    // length: 1
    // __proto__: Array(0)
    // __proto__: Object

    // })
    // access data like: jsonResponse.response[0].cases
  },
};
export default Covid19;
