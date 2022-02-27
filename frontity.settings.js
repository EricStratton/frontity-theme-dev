const settings = {
  "name": "frontity-theme-dev",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "theme-dev"

    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://frontitythemedev.local"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
