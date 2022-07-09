const productDetails = require("./productDetails");

// Testing for title of product
describe("Product title tests", () => {
  test("Show product title for a valid ASIN", async () => {
    const res = await productDetails.getTitle(
      "B08VN53D3P",
      productDetails.fetchProduct
    );
    expect(res).toBe("USPA Men T-Shirt");
  });

  test("Show correct product title", async () => {
    const res = await productDetails.getTitle(
      "B08GYMZP5L",
      productDetails.fetchProduct
    );
    expect(res).toBe(
      "Bryan & Candy New York Body Fragrance Mist Spray FAB FIVE Combo Gift Set For Women, 115 ml Each (Pack of 5) No Gas Perfume"
    );
  });

  test("Show product title for an invalid ASIN", async () => {
    const res = await productDetails.getTitle(
      "INVALIDASI",
      productDetails.fetchProduct
    );
    expect(res).toBe("AxiosError: Request failed with status code 404");
  });

  test("Show correct product title", async () => {
    const res = await productDetails.getTitle(
      "B08GYMZP5L",
      productDetails.fetchProduct
    );
    expect(res).toBe(
      "Bryan & Candy New York Body Fragrance Mist Spray FAB FIVE Combo Gift Set For Women, 115 ml Each (Pack of 5) No Gas Perfume"
    );
  });
});
