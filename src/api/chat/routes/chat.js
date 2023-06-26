'use strict';

/**
 * chat router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::chat.chat');
