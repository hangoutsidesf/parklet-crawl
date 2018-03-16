import axios from 'axios';
import pick from 'lodash.pick';

const fetchParklets = () => axios.get('https://data.sfgov.org/resource/6a7x-cttf.json');

export async function getParklets() {
  const payload = await fetchParklets();
  return payload;
}

export function parseParklet(parklet) {
  const keys = [
    'applicant',
    'cross_street_1',
    'cross_street_2',
    'envista_description',
    'envista_intermediate_location_text',
    'location',
    'street_name',
  ];
  return pick(parklet, keys);
}
