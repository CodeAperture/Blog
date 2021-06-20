module.exports = {
  siteTitle: 'Bob Walker',
  siteDescription: 'Musings on CI/CD, the software industry, and life.',
  authorName: 'Bob Walker',
  twitterUsername: '_bobjwalker_',
  authorAvatar: 'avatar.png', // file in content/images
  defaultLang: 'en',
  authorDescription: `
  Bob Walker started his professional career as a .NET 1.1 developer in 2004 with the task of converting classic ASP to this new fangilied technology ASP.NET.  After one too many 
  2:00 AM deployments involving 50 page Word documents he discovered his true passion in CI/CD.  Since his first automated deployment using Octopus Deploy and Redgate, Bob has published
  numerous blog posts, given mutliple webinars, and has had the chance to speak at conferences including HDC, KCDC, TechBash, and SQL in the City Summit.  
  `,
  siteUrl: 'https://bobjwalker.com',
  // Prefixes all links. 
  pathPrefix: '/prefix', // Note: it must *not* have a trailing slash.
  background_color: '#cccccc',
  theme_color: '#444444',
  display: 'standalone',
  icon: 'content/images/baymax.png',
  postsPerPage: 6,
  headerTitle: 'Bob Walker',
  headerLinksIcon: '', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-gatsby-starter-morning-dew',
    }
  ],
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-gatsby-starter-morning-dew',
        }
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/bobjwalker',
          rel: 'external',
        },
        {
          label: 'Website',
          url: 'https://bobjwalker.com',
          rel: 'external',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/_bobjwalker_',
          rel: 'external',
        },
      ],
    },
  ],
}
