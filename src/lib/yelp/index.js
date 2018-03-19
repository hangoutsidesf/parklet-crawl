import axios from 'axios';

const BASE_URL = 'https://api.yelp.com/v3/businesses/';
const headers = { Authorization: `Bearer ${process.env.YELP_API_KEY}` };

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
 * @param {string} name - The name of business.
 * @return {Promise} resolve = data - General business information.
 */
async function searchForBusiness(name) {
  const { data } = await axios.get(`${BASE_URL}search`, {
    headers,
    params: {
      term: name,
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
      },
    },
  });
  return data.businesses[0];
}

export {
  searchById,
  searchForBusiness,
};
