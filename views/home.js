const html = require('html-template-tag')

const showBookmarks = (bookmarks) => {
  return html `
  <html>
  <head>
  </head>
  <body>
  <h1>Bookmarker</h1>
  <form method = 'POST'>
  <input name="sitename" placeholder="enter sitename" />
  <input name="url" placeholder="enter site url" />
            <input name="category" placeholder="enter category" />
            <button>Create User</button>
  </form>
  </body>
  </html>
  `
}

module.exports = {showBookmarks};
