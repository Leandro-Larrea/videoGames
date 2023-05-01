// const { expect } = require("chai");
// const session = require("supertest-session");
// const server = require("../../src/app.js");
// const { Videogame, conn } = require("../../src/db.js");

// const agent = session(server);
// const videogame = {
//   name: "Super Mario Bros",
// };

// describe("Videogame routes", () => {
//   beforeAll(() =>
//     conn.authenticate().catch((err) => {
//       console.error("Unable to connect to the database:", err);
//     })
//   );

//   afterAll(() => conn.close());

//   beforeEach(() => {
//     agent = session(server);
//     return Videogame.sync({ force: true }).then(() =>
//       Videogame.create(videogame)
//     );
//   });

//   afterEach(() => {
//     agent.destroy();
//   });

//   describe("GET /videogames", () => {
//     it("should get 200", async () => {
//       const res = await agent.get("/videogames");
//       expect(res.statusCode).toEqual(200);
//     });
//   });
// });
