const axios = require("axios");
const cheerio = require("cheerio");

const fetchProduct = async (productASIN) => {
  try {
    const response = await axios.get(`https://www.amazon.in/dp/${productASIN}`);

    const html = response.data;

    const $ = cheerio.load(html);

    const title = $("#productTitle").text().trim();

    const image = $("#landingImage").attr();
    const imageLink = image.src;

    let availability = $("#availability").children().first().text().trim();
    availability =
      availability === ""
        ? "No vendor available for product sale."
        : availability;

    const noReviews = $("#acrCustomerReviewText").text();
    const reviewCount = noReviews.replace(/[^0-9]/g, "").trim();

    const ratingStars = $(
      "#averageCustomerReviews .a-icon.a-icon-star .a-icon-alt"
    )
      .text()
      .trim();
    const rating = ratingStars.split(" ")[0].trim();

    // prices = []
    // prices.push($('#corePrice_feature_div .a-price-whole').text());
    // prices.push($('#corePrice_feature_div .a-offscreen').text());

    features_list = [];
    $("#feature-bullets ul")
      .children()
      .each((i, feature) => {
        features_list.push($(feature).text().trim());
      });

    let product = {
      title,
      link: `https://www.amazon.in/dp/${productASIN}`,
      imageLink,
      availability,
      reviewCount,
      rating,
      features_list,
    };

    return product;
  } catch (err) {
    // return err.name;
    return err.toString();
  }
};

const getTitle = (productASIN, fetchProduct) => {
  return fetchProduct(productASIN).then((res) => {
    return typeof res === "object" ? res.title : res;
  });
};

const getImage = (productASIN, fetchProduct) => {
  return fetchProduct(productASIN).then((res) => {
    return typeof res === "object" ? res.imageLink : res;
  });
};

const getAvailability = (productASIN, fetchProduct) => {
  return fetchProduct(productASIN).then((res) => {
    return typeof res === "object" ? res.availability : res;
  });
};

const getReviewCount = (productASIN, fetchProduct) => {
  return fetchProduct(productASIN).then((res) => {
    return typeof res === "object" ? res.reviewCount : res;
  });
};

const getRating = (productASIN, fetchProduct) => {
  return fetchProduct(productASIN).then((res) => {
    return typeof res === "object" ? res.rating : res;
  });
};

const getFeatures = (productASIN, fetchProduct) => {
  return fetchProduct(productASIN).then((res) => {
    return typeof res === "object" ? res.features_list : res;
  });
};

// prodList = ['B0987Y1MBZ', 'B01F1CE2NM', 'B08GYMZP5L', 'B07XJPLL27', 'B08DKX84WG', 'B08MC5GLG4'];
// prodList.forEach((asin) => {
//     fetchProduct(asin).then(res => console.log(res));
// });

module.exports = {
  fetchProduct,
  getTitle,
  getImage,
  getAvailability,
  getReviewCount,
  getRating,
  getFeatures,
};

// fetchProduct("B08VN53D3P").then((res) => console.log(res));
