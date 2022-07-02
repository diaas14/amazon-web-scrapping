const productDetails = require("./productDetails");

// Testing if the review returned is the right review
test("Show correct rating", async () => {
  const res = await productDetails.getRating(
    "B01F1CE2NM",
    productDetails.fetchProduct
  );
  expect(res).toBe("4.7");
});

 test("Show for product with new rating", async () => {
   const res = await productDetails.getRating(
     "B09ZLQXMXX",
     productDetails.fetchProduct
   );
   expect(res).toBe("");
  
 });

 test("Checking availability for an invalid ASIN", async () => {
   const res = await productDetails.getRating(
     "INVALIDASI",
     productDetails.fetchProduct
   );
   expect(res).toBe("AxiosError");
 });





