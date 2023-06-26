module.exports = {
  routes: [
    {
      method: "POST",
      path: "/strapi-chat/chat",
      handler: "strapi-chat.chat",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/strapi-chat/get-session-by-id/:sessionId",
      handler: "strapi-chat.getSessionById",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "DELETE",
      path: "/strapi-chat/delete-session-by-id/:sessionId",
      handler: "strapi-chat.deleteSessionById",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/strapi-chat/clear-all-sessions",
      handler: "strapi-chat.clearAllSessions",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/strapi-chat/get-all-sessions",
      handler: "strapi-chat.getAllSessions",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};