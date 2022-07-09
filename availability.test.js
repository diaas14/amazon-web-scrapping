const productDetails = require("./productDetails");

describe("Product availability tests", () => {
  test("Checking availability for a product in stock", async () => {
    const res = await productDetails.getAvailability(
      "B08T947SVY",
      productDetails.fetchProduct
    );
    expect(res).toBe("In stock.");
  });

  test("Checking availability for a product having 1 item in stock", async () => {
    const res = await productDetails.getAvailability(
      "B01F1CE2NM",
      productDetails.fetchProduct
    );
    expect(res).toBe("Only 1 left in stock.");
  });

  test("Checking availability for a product that's out of stock", async () => {
    const res = await productDetails.getAvailability(
      "B01MXTQCD7",
      productDetails.fetchProduct
    );
    expect(res).toBe("Currently unavailable.");
  });

  test("Checking availability for a product with no vendors", async () => {
    const res = await productDetails.getAvailability(
      "B08FWG4376",
      productDetails.fetchProduct
    );
    expect(res).toBe("No vendor available for product sale.");
  });

  test("Checking availability for an invalid ASIN", async () => {
    const res = await productDetails.getAvailability(
      "INVALIDASI",
      productDetails.fetchProduct
    );
    expect(res).toBe("AxiosError");
  });
});
