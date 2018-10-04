// doMock hoist doesn't work

// put mock files into __mocks__ folder

const mockData = {
  userId: 1,
  id: 555,
  title: "i am replace mock",
  completed: false
};

jest.mock("axios", () => {
  return {
    default: {
      get: jest.fn(() => Promise.resolve({ data: mockData }))
    }
  };
});

import apiCall from "./api-play";

describe("test manual mock api play", async () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("call weather api", async () => {
    jest.doMock("axios", () => {
      return {
        default: {
          get: jest.fn(() =>
            Promise.resolve({ data: { id: 5566 } })
          )
        }
      };
    });

    let id = 123;
    let res = await apiCall(id);

    expect(res.id).not.toBe(id);
    expect(res.id).toBe(5566);
    expect(res.title).toBe("i am replace mock");
  });
});
