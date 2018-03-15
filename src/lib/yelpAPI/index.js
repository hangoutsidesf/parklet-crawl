import axios from 'axios';

// const callAPI = () => axios.get('https://data.sfgov.org/resource/6a7x-cttf.json');
const callAPI = () => axios('https://api.yelp.com/v3/businesses/four-barrel-coffee-san-francisco', { headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` } });

export default async function func() {
  try {
    const data = await callAPI();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  process.exit(0);
}

/**
 * Call API
 * Shape of returned data:
 * {
    ":@computed_region_ajp5_b2md": "35",
    ":@computed_region_bh8s_q3mv": "56",
    ":@computed_region_jx4q_fizf": "5",
    ":@computed_region_rxqg_mtj9": "3",
    ":@computed_region_yftq_j783": "1",
    "applicant": "Other Avenues Food Store",
    "cnn": "7681000",
    "cross_street_1": "44TH AVE",
    "cross_street_2": "45TH AVE",
    "envista_description": "3930 JUDAH ST",
    "envista_end_date": "2\/15\/2019",
    "envista_facility_indicator": "Parking",
    "envista_facility_subindicator": "Sidewalks",
    "envista_facility_type": "Roadway",
    "envista_intermediate_location_text": "3930 JUDAH ST, San Francisco, CA 94122",
    "envista_location_type": "Point",
    "envista_moratoriums_opportunities": "No Excavation",
    "envista_project_id": "18PKT-0041",
    "envista_project_name_full": "Parklet at Other Avenues Food Store",
    "envista_project_type": "Maintenance",
    "envista_start_date": "2\/20\/2018",
    "latitude": "37.7606488715908",
    "location": {
      "type": "Point",
      "coordinates": [
        -122.50433501593,
        37.760648871591
      ]
    },
    "longitude": "-122.504335015934",
    "permit_address": "3930 JUDAH ST",
    "permit_approval_date": "2\/20\/2018",
    "permit_end_date": "2\/15\/2019",
    "permit_number": "18PKT-0041",
    "permit_purpose": "Parklet",
    "permit_status": "APPROVED",
    "permit_zipcode": "94122",
    "street_name": "JUDAH ST",
    "x": "5982303.2925",
    "y": "2105635.81941"
  }
 *
 *
 *
 *
 */
