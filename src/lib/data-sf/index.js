import axios from 'axios';
import pick from 'lodash.pick';

/* Simple GET request to data.sfgov */
const fetchParklets = () => axios.get('https://data.sfgov.org/resource/6a7x-cttf.json');

/**
 * Returns a blob of parklet data.
 * @async
 * @returns {object[]} data - A list of each parklet in SF.
*/
async function getParklets() {
  const { data } = await fetchParklets();
  return data;
}

/**
 * Prunes a parklet object and returns new object with only required keys.
 * @param {object} parklet - Individual parklet object with many keys.
 * @constant {array} desiredKeys - A list of keys on each blob that are required.
 * @returns {object} - New object with only defined keys.
 */
function parseParklet(parklet) {
  const desiredKeys = [
    'applicant',
    'cross_street_1',
    'cross_street_2',
    'envista_description',
    'envista_intermediate_location_text',
    'location',
    'street_name',
  ];
  return pick(parklet, desiredKeys);
}

export {
  getParklets,
  parseParklet,
};
