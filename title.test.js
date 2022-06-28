const productDetails = require("./productDetails");

// Testing for title of product

test("Show correct product title", async () => {
  const res = await productDetails.getTitle(
    "B08GYMZP5L",
    productDetails.fetchProduct
  );
  expect(res).toBe(
    "Bryan & Candy New York Body Fragrance Mist Spray FAB FIVE Combo Gift Set For Women, 115 ml Each (Pack of 5) No Gas Perfume"
  );
});
