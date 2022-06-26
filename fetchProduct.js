const axios = require("axios");
const cheerio = require("cheerio");

const fetchProduct = async (productASIN) => {
    try {
        const response = await axios.get(`https://www.amazon.in/dp/${productASIN}`);
 
        const html = response.data;
 
        const $ = cheerio.load(html);

        const title = $('#productTitle').text().trim();

        const image = $('#landingImage').attr();
        const imageLink = image.src;

        const availability = $('#availability').children().first().text().trim();

        const noReviews = $('#acrCustomerReviewText').text();
        const reviewCount = noReviews.replace(/[^0-9]/g,'').trim();

        const ratingStars = $('#averageCustomerReviews .a-icon.a-icon-star .a-icon-alt').text().trim();
        const rating = ratingStars.split(' ')[0];
    
        // prices = []
        // prices.push($('#corePrice_feature_div .a-price-whole').text());
        // prices.push($('#corePrice_feature_div .a-offscreen').text());

        features_list = [];
        $('#feature-bullets ul').children().each((i, feature) => {
            features_list.push($(feature).text().trim());
        })

        let product = {
            title,
            link: `https://www.amazon.in/dp/${productASIN}`,
            imageLink,
            availability,
            reviewCount,
            rating,
            features_list
        }

        return product;
        
    } catch (err) {
        console.log(err);
    }
}

const getTitle = (productASIN, fetchProduct) => {
    fetchProduct(productASIN).then(res => {console.log(res.title)});
}

const getImage = (productASIN, fetchProduct) => {
    fetchProduct(productASIN).then(res => {console.log(res.imageLink)});
}

const getAvailability= (productASIN, fetchProduct) => {
    fetchProduct(productASIN).then(res => {console.log(res.availability)});
}

const getReviewCount = (productASIN, fetchProduct) => {
    fetchProduct(productASIN).then(res => {console.log(res.reviewCount)});
}

const getRating = (productASIN, fetchProduct) => {
    fetchProduct(productASIN).then(res => {console.log(res.rating)});
}

const getFeatures = (productASIN, fetchProduct) => {
    fetchProduct(productASIN).then(res => {res.features_list.forEach(feature => {console.log(feature);})});
}

// prodList = ['B0987Y1MBZ', 'B01F1CE2NM', 'B08GYMZP5L', 'B07XJPLL27', 'B08DKX84WG', 'B08MC5GLG4'];
// prodList.forEach((asin, id) => {
//     fetchProduct(asin, id).then(res => console.log(res));
// });