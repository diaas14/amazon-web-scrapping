const productDetails = require("./productDetails");

describe("Request successful tests", () => {
  test("Check if request is successful and if product details are fetched for valid ASIN", async () => {
    const res = await productDetails.fetchProduct("2123355");
    expect(res).toEqual("AxiosError: Request failed with status code 404");
  });

  test("Check if request is successfulfor an invalid ASIN", async () => {
    const res = await productDetails.fetchProduct("B08VN53D3P");
    const expected_res = {
      title: "USPA Men T-Shirt",
      link: "https://www.amazon.in/dp/B08VN53D3P",
      imageLink:
        "https://m.media-amazon.com/images/I/41VQuvmWEoL._SX342_SY445_.jpg",
      availability: "No vendor available for product sale.",
      reviewCount: "5",
      rating: "3.5",
      features_list: [
        "Care Instructions: Dry Clean Only",
        "Fit Type: Regular",
        "Cotton",
      ],
    };
    expect(res).toEqual(expected_res);
  });
});
