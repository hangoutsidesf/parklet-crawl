import { Location } from '../../../src/lib/yelp';

const sfLocation = { city: 'San Francisco', stateCode: 'CA', countryCode: 'US' };
const nyLocation = { city: 'New York City', stateCode: 'NY', countryCode: 'US' };
const sfMexLocation = { city: 'San Francisco', stateCode: 'NAY', countryCode: 'MX' };
const nyArgs = ['New York City', 'NY', 'US'];
const sfMexArgs = [undefined, 'NAY', 'MX']; // San Francisco, Nayarit, Mexico.

describe('Yelp', () => {
  describe('Location', () => {
    it('Defaults to San Francisco, CA, US', () => {
      expect(new Location()).toMatchObject(sfLocation);
    });
    it('Creates correct Locations', () => {
      expect(new Location(...nyArgs)).toMatchObject(nyLocation);
    });
    it('Creates correct Locations with defaults', () => {
      expect(new Location(...sfMexArgs)).toMatchObject(sfMexLocation);
    });
  });
});
