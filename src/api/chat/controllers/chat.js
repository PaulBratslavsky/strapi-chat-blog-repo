'use strict';

/**
 * chat controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::chat.chat');
