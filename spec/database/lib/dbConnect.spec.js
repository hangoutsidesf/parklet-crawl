import { connectWithRetry, connectToMongo } from '../../../database/lib/dbConnect';

describe('gracefully attempt reconnection to mongo client on first connection', () => {
  test('should throw an error after three attempts to connect', () => {
    connectWithRetry(1).catch((err) => {
      expect(err).toBeDefined();
    });
  });
});

describe('Should not attempt to connect to database during testing', () => {
  afterEach(() => {
    jest.resetModules();
  });

  test('should not invoke callback when env is test', () => {
    process.env.NODE_ENV = 'test';
    const mockFn = jest.fn();
    connectToMongo(mockFn);
    expect(mockFn).toHaveBeenCalledTimes(0);
  });
  test('should invoke callback when env is not test', () => {
    process.env.NODE_ENV = 'development';
    const mockFn = jest.fn();
    connectToMongo(mockFn);
    expect(mockFn).toHaveBeenCalled();
  });
});
