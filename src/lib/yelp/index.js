import axios from 'axios';

const BASE_URL = 'https://api.yelp.com/v3/businesses/';

async function searchById(id) {
  const data = await axios.get(BASE_URL + id, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
  });
  return data;
}

searchById('four-barrel-coffee-san-francisco')
  .then(({ data }) => data)
  .catch((err) => {
    console.error(err);
  });
