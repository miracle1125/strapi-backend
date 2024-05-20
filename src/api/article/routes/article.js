"use strict";

/**
 * article router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/articles/:slug",
      handler: "article.findOne",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/articles",
      handler: "article.find",
      config: {
        policies: [],
      },
    },
  ],
};
