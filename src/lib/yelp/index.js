import axios from 'axios';

const BASE_URL = 'https://api.yelp.com/v3/businesses/';

/**
 * Returns more detailed information about a specific business.
 * @async
 * @param {string} id - The Yelp ID of business.
 * @constant {string} BASE_URL - The base url of the Yelp API.
 * @return {Promise} resolve = data - Detailed business information.
 */
export async function searchById(id) {
  const { data } = await axios.get(BASE_URL + id, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
  });
  return data;
}

/**
 * Returns general information about a specific business.
 * @async
 * @param {string} name - The name of business.
 * @return {Promise} resolve = data - General business information.
 */
export async function searchForBusiness(name) {
  const { data } = await axios.get(`${BASE_URL}search`, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
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
