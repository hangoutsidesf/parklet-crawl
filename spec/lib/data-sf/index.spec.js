import { getParklets, parseParklet } from '../../../src/lib/data-sf';

describe('Data SF', () => {
  test('Should fetch blob of parklet data', () => (
    getParklets().then(({ data }) => expect(data.length).toBeGreaterThan(0))
  ));
  test('Should prune unecessary keys from parklet obj', () => (
    getParklets()
      .then(({ data }) => data[0])
      .then(parklet => parseParklet(parklet))
      .then(prunedParklet => expect(Object.keys(prunedParklet).length).toBe(7))
  ));
});
