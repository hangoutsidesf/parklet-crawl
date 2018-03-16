import getParklets from '../../../src/lib/data-sf';

describe('Data SF', () => {
  test('Should fetch blob of parklet data', () => (
    getParklets().then(({ data }) => expect(data.length).toBeGreaterThan(0))
  ));
});
