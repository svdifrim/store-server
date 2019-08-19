const chai = require("chai");
const request = require("supertest");
const app = require("../server");

describe("product routes", () => {
  it("should return status 200 products", done => {
    request(app)
      .get("/products")
      .expect("Content-Type", /json/)

      .expect(200, done);
  });
});

describe("categories routes", () => {
  it("Should get 200 response for categories", done => {
    request(app)
      .get("/categories")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("Single product", () => {
  it("Should get 200 response for one product", done => {
    request(app)
      .get(`/products/1be91184-f38d-41bc-b47c-910fb0ce1f5a`)
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("Products with categories they belong", () => {
  it("Should get products with categories they have", done => {
    request(app)
      .get(`/products/categories/14531f52-8cf7-4978-b1b1-6db463944ccd`)
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("Products with categories they belong by categoryId & manufacturer id using query", () => {
  it("Should get products with categories they have", done => {
    request(app)
      .get(
        `/products/?category=14531f52-8cf7-4978-b1b1-6db463944ccd&manufacturer=2`
      )
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("Testing simple methods", () => {
  beforeEach(() => {
    console.log("before test");
  });

  afterEach(() => {
    console.log("after test");
  });

  it("Should receive and error if not array", () => {});
});
