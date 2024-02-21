'use strict';

/**
 * subproject service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::subproject.subproject');
