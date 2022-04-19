

'use strict';

/**
 * category router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;
const r = createCoreRouter('api::category.category');
console.log(r);
module.exports = r
