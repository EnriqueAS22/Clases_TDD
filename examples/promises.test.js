import { failedRequest, successfullRequest } from "./promises";

// Callback style
describe("Callback style", () => {
  it("Debe devolver un código de estado 200 cuando llamamos a successfullRequest", (done) => {
    successfullRequest().then((response) => {
      expect(response.status).toBe(200);
      expect(response.headers["content-length"]).toBe("0");
      done();
    });
  }, 10000); // Podemos configurar un timeout personalizado. Por defecto 5000.

  it("Debe devolver un código 403 cuando llamamos a failedRequest", (done) => {
    failedRequest().catch((error) => {
      expect(error.status).toEqual(403);
      done();
    });
  });
});

// Resolves style
describe("Resolves / Rejects style", () => {
  it("Debe contener un código de estado 200 cuando llamamos a successfullRequest", () => {
    return expect(successfullRequest()).resolves.toContainEntry([
      "status",
      200,
    ]); // A partir de .resolves podemos evaluar el contenido completo de la respuesta.
  });

  it("Debe contener un código de estado 403 cuando llamamos a failedRequest", () => {
    return expect(failedRequest()).rejects.toContainEntry(["status", 403]);
  });
});

// Async / Await style
describe("Async / Await style", () => {
  it.only("Debe contener un código de estado 200 cuando llamamos a successfullRequest", async () => {
    expect.assertions(2);
    const response = await successfullRequest();
    expect(response.status).toEqual(200);
    expect(response.headers["content-length"]).toBe("0");
  });

  it("Debe contener un código de estado 403 cuando llamamos a failedRequest", async () => {
    expect.assertions(1);
    try {
      const response = await failedRequest();
    } catch (err) {
      expect(err.response.status).toEqual(403);
    }
  });
});
