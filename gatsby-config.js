module.exports = {
  siteMetadata: {
    siteTitle: `Code Recipes`,
    defaultTitle: `Code Recipes`,
    siteTitleShort: `code Recipes`,
    siteDescription: `OSSのCodeのレシピ集`,
    siteUrl: `https://code-recipes.netlify.com`,
    siteAuthor: `@sintaro`,
    siteImage: `/banner.png`,
    siteLanguage: `jp`,
    themeColor: `#e87624`,
    basePath: `/`,
    footer: `@code recipes`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
