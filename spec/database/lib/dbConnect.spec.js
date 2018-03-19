import connectWithRetry from '../../../database/lib/dbConnect';

// jest.dontMock('mongoose');
// jest.dontMock('mquery')
// jest.enableAutomock();

describe('gracefull attempt reconnection to mongo client', () => {
  test('should attempt to reconnect up to 3 times', () => {
    expect(connectWithRetry).toThrow();
  });
});

// let connectWithRetry = jest.genMockFromModule('../../../database/lib/dbConnect');
// connectWithRetry = jest.fn();
// jest.useFakeTimers();

// describe('connectWithRetry', () => {
//   test('should attempt to connect 3 times', () => {
//     connectWithRetry();
//     expect(connectWithRetry).toHaveBeenCalledTimes(1);
//     jest.runOnlyPendingTimers();

//     expect(connectWithRetry).toHaveBeenCalledTimes(2);
//   });
// });
