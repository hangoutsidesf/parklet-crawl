import axios from 'axios';

const fetchParklets = () => axios.get('https://data.sfgov.org/resource/6a7x-cttf.json');

async function log() {
  const data = await fetchParklets();
  console.log(data);
}
log();
