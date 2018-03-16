import axios from 'axios';

const callAPI = () => axios.get('https://data.sfgov.org/resource/6a7x-cttf.json');

async function log() {
  const data = await callAPI();
  console.log(data);
}
log();
