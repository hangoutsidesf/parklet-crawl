import axios from 'axios';

const fetchParklets = () => axios.get('https://data.sfgov.org/resource/6a7x-cttf.json');

export default async function getParklets() {
  const payload = await fetchParklets();
  return payload;
}
