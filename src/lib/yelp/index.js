import axios from 'axios';

const BASE_URL = 'https://api.yelp.com/v3/businesses/';
const headers = { Authorization: `Bearer ${process.env.YELP_API_KEY}` };

/**
 * Creates a Location for a specific place by city, state, country; Defaults to San Francicso, CA.
 * @class
 * @param {string=} [city=San Francisco] - The city of the location.
 * @param {string=} [stateCode=CA] - The ISO state code of the location.
 * @param {string=} [countryCode=US] - The ISO country code of the location.
*/
class Location {
  constructor(city = 'San Francisco', stateCode = 'CA', countryCode = 'US') {
    this.city = city;
    this.stateCode = stateCode;
    this.countryCode = countryCode;
  }
}

/**
 * Returns more detailed information about a specific business.
 * @async
 * @param {string} id - The Yelp ID of business.
 * @constant {string} BASE_URL - The base url of the Yelp API.
 * @return {Promise} resolve = data - Detailed business information.
 */
async function searchById(id) {
  const { data } = await axios.get(BASE_URL + id, { headers });
  return data;
}

/**
 * Returns general information about a specific business.
 * @async
 * @param {string} term - The name of business.
 * @param {Location=} location - The location of business.
 * @return {Promise} resolve = data - General business information.
 */
async function searchForBusiness(term, location = new Location()) {
  const { data } = await axios.get(`${BASE_URL}search`, {
    headers,
    params: { term, location },
  });
  return data.businesses[0];
}

export {
  searchById,
  searchForBusiness,
  Location,
};
