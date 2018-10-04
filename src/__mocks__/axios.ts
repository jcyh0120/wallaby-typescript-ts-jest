const mockData = {
  userId: 1,
  id: 100,
  title: "i am manual mock in __mocks__",
  completed: false
};

export default {
  get: jest.fn(() => Promise.resolve({ data: mockData }))
};
