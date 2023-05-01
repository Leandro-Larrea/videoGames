const { getId } = require("../../routes/videogames");

const expect = require("chai").expect;

describe("getId", function () {
  it(`si no recibe id lanza error: "el id es obligatorio"`, function () {
    expect(() => getId().to.throw("el id es necesario"));
  });
  it(`si no encuentra el videoJuego lanza: "No se encontro un videoJuego con el id propocionado"`, async function () {
    try {
      await getId("id_no_existente");
    } catch (error) {
      expect(error.message).equal(
        "No se encontro un videoJuego con el id propocionado"
      );
    }
  });
  it("si encuentra un videoJuego devuelve un objeto con la informacion del juego", async function () {
    const result = await getId(3998);
    expect(result).to.have.property("name");
    expect(result).to.have.property("description");
    expect(result).to.have.property("genres");
    expect(result).to.have.property("releaseDate");
    expect(result).to.have.property("img");
    expect(result).to.have.property("rating");
    expect(result).to.have.property("platforms");
  });
});
