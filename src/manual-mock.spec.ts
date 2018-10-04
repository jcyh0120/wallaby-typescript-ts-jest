// put mock files into __mocks__ folder

import apiCall from "./api-play";

describe("test manual mock api play", async () => {
  it("call weather api", async () => {
    let id = 999;
    let res = await apiCall(id);

    // because data it is mocked in __mocks__
    expect(res.id).not.toBe(id);
    expect(res.id).toBe(100); 
    expect(res.title).toBe("i am manual mock in __mocks__");
  });
});
