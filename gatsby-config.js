module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blolg`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-remark-prismjs",
      options: {
        classPrefix: "language-",
        inlineCodeMarker: null,
        aliases: {},
        showLineNumbers: false,
        noInlineHighlight: false,
        languageExtensions: [
          {
            language: "superscript",
            extednd: "superscript",
            definition: {
              superscript_types: /(SuperType)/,
            },
            insertBefore: {
              function: {
                superscript_keywords: /(superif|superelse)/,
              },
            },
          },
        ],
        prompt: {
          user: "root",
          host: "localhost",
          global: false,
        },
        escapeEntities: {},
      },
    },
  ]
};
