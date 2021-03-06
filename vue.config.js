module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/", "/About", "Contact"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },

  publicPath: process.env.NODE_ENV === "production" ? "/project-starry/" : "/",
};
