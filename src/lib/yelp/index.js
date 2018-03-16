import axios from 'axios';

/* Yelp API module. */
export default class Yelp {
  constructor() {
    this.BASE_URL = 'https://api.yelp.com/v3/businesses/';
  }
  /**
   * Returns more detailed information about a specific business.
   * @param {string} id - The Yelp ID of business.
   * @return {object} businessInformation - The author of the book.
   */
  async searchById(id) {
    const businessInformation = await axios.get(this.BASE_URL + id, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      },
    });
    return businessInformation;
  }
}
