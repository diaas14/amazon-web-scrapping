const axios = require("axios");
const cheerio = require("cheerio");

const fetchProduct = async (productASIN, id) => {
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

        const ratingStars = $('#averageCustomerReviews .a-icon.a-icon-star .a-icon-alt').text();
    
        // prices = []
        // prices.push($('#corePrice_feature_div .a-price-whole').text());
        // prices.push($('#corePrice_feature_div .a-offscreen').text());

        features_list = [];
        $('#feature-bullets ul').children().each((i, feature) => {
            features_list.push($(feature).text());
        })

        let product = {
            title,
            link: `https://www.amazon.in/dp/${productASIN}`,
            imageLink,
            availability,
            reviewCount,
            ratingStars,
            features_list
        }

        return product;
        
    } catch (err) {
        console.log(err);
    }
}

prodList = ['B0987Y1MBZ', 'B01F1CE2NM', 'B08GYMZP5L', 'B07XJPLL27', 'B08DKX84WG', 'B08MC5GLG4'];
prodList.forEach((asin, id) => {
    fetchProduct(asin, id).then(res => console.log(res));
});

