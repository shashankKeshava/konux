/**
 * @description Sort options
 * @returns {Array} Options
 */

export const sortOptions = [
    { id: 1, desc: 'Price: low to high', type: 'PRICE:asc' },
    { id: 2, desc: 'Price: high to low', type: 'PRICE:desc' },
    { id: 3, desc: 'Rating: low to high', type: 'RATING:asc' },
    { id: 4, desc: 'Rating: high to low', type: 'RATING:desc' },
];

/**
 * @description Format Price in the format of 89,99€
 * @param {String} price
 * @returns {String}
 */
export function priceFormatter(price) {
    const [euro, cent] = price.split('.');
    return `${euro},${cent}€`;
}
