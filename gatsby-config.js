/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Minimal Starter`,
    description: `Assumes almost nothing but Gatsby`,
    author: `@witcradg`,
    siteUrl: `https://witcraft.io`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //     resolve: `gatsby-source-filesystem`,
    //     options: {
    //       name: `content`,
    //       path: `${__dirname}/src/content`,
    //     },
    //   },    
    // `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
