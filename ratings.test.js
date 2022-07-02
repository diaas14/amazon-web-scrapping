const productDetails = require("./productDetails");

// Testing if the review returned is the right review
test("Show correct rating", async () => {
  const res = await productDetails.getRating(
    "B01F1CE2NM",
    productDetails.fetchProduct
  );
  expect(res).toBe("4.7");
});

test("Show incorrect rating", async () => {
  const res = await productDetails.getRating(
    "B01F1CE2NM",
    productDetails.fetchProduct
  );
  expect(res).toBe("4.8");
});


