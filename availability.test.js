const productDetails = require('./productDetails');

test('Show correct availability', async () => {
    const res = await productDetails.getAvailability('B01F1CE2NM', productDetails.fetchProduct);
    expect(res).toBe('Only 1 left in stock.');
})
