const fs = require('fs')
const path = require('path')

module.exports = {
  plugins: [
    require('remark-frontmatter'),
    require('remark-validate-links'),
    [
      require('remark-retext'),
      require('unified')().use({
        plugins: [
          require('retext-english'),
          require('retext-syntax-urls'),
          [
            require('retext-spell'),
            {
              dictionary: require('dictionary-en-us'),
              personal: fs.readFileSync(
                path.join(__dirname, '.dictionary'),
                'utf8'
              )
            }
          ],
          [require('retext-sentence-spacing'), { preferred: 1 }],
          require('retext-repeated-words'),
          require('retext-usage')
        ]
      })
    ]
  ]
}
