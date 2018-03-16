import axios from 'axios';

export default class Yelp {
  constructor() {
    this.BASE_URL = 'https://api.yelp.com/v3/businesses/';
  }

  async searchById(id) {
    const data = await axios.get(this.BASE_URL + id, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      },
    });
    return data;
  }
}
