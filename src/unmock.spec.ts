// This will call real api
jest.unmock("axios");

import apiCall from "./api-play";

describe("test mock api play", async () => {
  it("call weather api", async () => {
    let id = 1;
    let res = await apiCall(id);
    res //?
    expect(res.id).toBe(id);
    expect(res.title).toBe("delectus aut autem");
  });
});
