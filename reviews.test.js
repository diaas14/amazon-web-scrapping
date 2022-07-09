const productDetails = require("./productDetails");

test("Show correct number of reviews", async () => {
  const res = await productDetails.getReviewCount(
    "B01F1CE2NM",
    productDetails.fetchProduct
  );
  expect(res).toBe("493");
});

test("Show that product has no reviews", async () => {
  const res = await productDetails.getReviewCount(
    "B09ZLQXMXX",
    productDetails.fetchProduct
  );
  expect(res).toBe("");
});

test("Checking reviews for invalid product", async () => {
  const res = await productDetails.getReviewCount(
    "INVALIDASI",
    productDetails.fetchProduct
  );
  expect(res).toBe("AxiosError: Request failed with status code 404");
});
