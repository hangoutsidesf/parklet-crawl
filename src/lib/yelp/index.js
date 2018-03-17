import axios from 'axios';

const BASE_URL = 'https://api.yelp.com/v3/businesses/';

/**
 * Returns more detailed information about a specific business.
 * @async
 * @param {string} id - The Yelp ID of business.
 * @constant {string} BASE_URL - The base url of the Yelp API.
 * @return {Promise} resolve = businessInformation - Detailed business information.
 */
export async function searchById(id) {
  const businessInformation = await axios.get(BASE_URL + id, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
  });
  return businessInformation;
}

/**
 * Returns general information about a specific business.
 * @async
 * @param {string} name - The name of business.
 * @return {Promise} resolve = businessInformation - General business information.
 */
export async function searchForBusiness(name) {
  const businessInformation = await axios.get(`${BASE_URL}matches/best`, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
    params: {
      name,
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  });
  return businessInformation;
}
