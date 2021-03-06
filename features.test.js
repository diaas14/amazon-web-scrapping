const { AxiosError } = require("axios");
const productDetails = require("./productDetails");

// Testing if the feature returned is the right list
test("Show correct feature list", async () => {
  const res = await productDetails.getFeatures(
    "B01F1CE2NM",
    productDetails.fetchProduct
  );
  expect(res[0]).toBe(
    "Gucci Bamboo Eau de Toilette offers alluring insight into the Gucci woman's sensual, romantic side. Rich Tahitian vanilla and Casablanca lily paired with bright mandarin notes"
  );
});

//Tesing if the currect no of fetures in the feature list is returned

test("Show correct no of features", async () => {
  const res = await productDetails.getFeatures(
    "B01F1CE2NM",
    productDetails.fetchProduct
  );
  expect(res.length).toBe(5);
});

test("Product that is unavailable with no features", async () => {
  const res = await productDetails.getFeatures(
    "INVALIDASI",
    productDetails.fetchProduct
  );
  expect(res).toBe("AxiosError: Request failed with status code 404");
});
