const supertest = require("supertest");
const app = require("../server");
const request = supertest(app);

describe("Test Endpoints", () => {
  it("should return JSON data", async (done) => {
    const res = await request.post("/getGithubData/1").send({});
    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual("application/json");
    done();
  });
});
