const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

// test h1 to be in the document
describe("Index HTML", () => {
  let dom;
  let container;

  beforeAll(() => {
    const htmlContent = fs.readFileSync(path.join("public/index.html"), "utf8");
    dom = new JSDOM(htmlContent);
    container = dom.window.document.body;
  });

  it("should contain an h1 tag with the correct text", () => {
    const h1 = container.querySelector("h1");
    expect(h1).not.toBeNull();
    expect(h1.textContent).toBe("What's the weather?");
  });
});

// test form to be in the document
// test renders components when city name is valid
// test loading
// test data component
// test renders error when city name is not valid
// test error

// test api call with async await
