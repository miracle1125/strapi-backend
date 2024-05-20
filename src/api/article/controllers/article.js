"use strict";

/**
 * article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article");

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    // Find the article by slug
    const entity = await strapi.db.query("api::article.article").findOne({
      where: { slug },
    });

    if (!entity) {
      return ctx.notFound("Article not found");
    }

    return this.transformResponse(entity);
  },

  async find(ctx) {
    return super.find(ctx);
  },
}));
