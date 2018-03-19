import { getParklets, parseParklet } from '../../../src/lib/data-sf';

describe('Data SF', () => {
  describe('#getParklets()', () => {
    test('Should fetch blob of parklet data', () => (
      getParklets().then(data => expect(data.length).toBeGreaterThan(0))
    ));
  });

  describe('#parseParklet()', () => {
    test('Should prune unecessary keys from parklet obj', () => {
      const index = Math.floor(Math.random() * 31); // Pick a random parklet from the list.
      return getParklets()
        .then(data => data[index])
        .then(parklet => parseParklet(parklet))
        .then(prunedParklet => expect(Object.keys(prunedParklet).length).toBe(7));
    });
  });
});
