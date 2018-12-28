const path = require('path')

const pkg = require('../../package.json')

module.exports = {
  base: '/',
  head: [
    [
      'meta',
      {
        'data-hid': 'author',
        name: 'author',
        content: pkg.author
      }
    ],
    [
      'meta',
      {
        'data-hid': 'repository',
        name: 'repository',
        content: pkg.repository
      }
    ],
    [
      'meta',
      {
        'data-hid': 'version',
        name: 'version',
        content: pkg.version
      }
    ],
    [
      'meta',
      {
        'data-hid': 'keywords',
        name: 'keywords',
        content:
          'document,documents,kamontat,chantrachirathumrong,website,vuepress,ssr,portfolio'
      }
    ]
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Documents',
      description: 'Document for Portfolio website'
    },
    '/th/': {
      lang: 'th-TH',
      title: 'Documents',
      description: 'Document for Portfolio website'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        sidebar: 'auto',
        activeHeaderLinks: true,
        displayAllHeaders: true,
        nav: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'Development',
            link: '/development/'
          },
          {
            text: 'Design',
            link: '/design-principle/'
          },
          {
            text: 'Changelog',
            items: [
              {
                text: 'Website',
                link: '/changelog/'
              },
              {
                text: 'Document',
                link: '/changelog-doc/'
              },
              {
                text: 'APIs',
                link: '/changelog-api/'
              }
            ]
          }
        ],
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        }
      },
      '/th/': {
        // text for the language dropdown
        selectText: 'เลือกภาษา',
        // label for this locale in the language dropdown
        label: 'ภาษาไทย',
        sidebar: 'auto',
        activeHeaderLinks: true,
        displayAllHeaders: true,
        nav: [
          {
            text: 'หน้าแรก',
            link: '/th/'
          },
          {
            text: 'การพัฒนา',
            link: '/th/development/'
          },
          {
            text: 'การออกแบบ',
            link: '/th/design-principle/'
          },
          {
            text: 'Changelog (Eng)',
            items: [
              {
                text: 'Website',
                link: '/changelog/'
              },
              {
                text: 'Document',
                link: '/changelog-doc/'
              },
              {
                text: 'APIs',
                link: '/changelog-api/'
              }
            ]
          }
        ],
        // text for the edit-on-github link
        editLinkText: 'ต้องการ แก้ไขหน้านี้ใน Github',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'มีข้อมูลใหม่',
            buttonText: 'ต้องการดาวน์โหลด'
          }
        }
      }
    },
    searchMaxSuggestions: 3,
    algolia: {
      apiKey: 'cfad96bc0e76cc9b25c8e7f58ac3eb9a',
      indexName: 'kcnt',
      debug: false
    },
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'kcnt-info/Documents',
    // if your docs are in a different repo from your main project:
    docsRepo: 'kcnt-info/Documents',
    // if your docs are not at the root of the repo:
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true
  },
  async additionalPages() {
    // Note that VuePress doesn't have request library built-in
    // you need to install it yourself.
    const axios = require('axios')
    const response = await axios.get(
      'https://raw.githubusercontent.com/kcnt-info/website/master/CHANGELOG.md'
    )
    const apisResponse = await axios.get(
      'https://raw.githubusercontent.com/kcnt-info/apis/master/CHANGELOG.md'
    )

    return [
      {
        path: '/changelog-doc/',
        filePath: path.resolve(__dirname, '../../CHANGELOG.md')
      },
      {
        path: '/th/changelog-doc/',
        filePath: path.resolve(__dirname, '../../CHANGELOG.md')
      },
      {
        path: '/changelog-api/',
        content: apisResponse.data
      },
      {
        path: '/th/changelog-api/',
        content: apisResponse.data
      },
      {
        path: '/changelog/',
        content: response.data
      },
      {
        path: '/th/changelog/',
        content: response.data
      }
    ]
  },
  plugins: {
    '@vuepress/back-to-top': {},
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        const time = new Date(timestamp)
        return time.toLocaleTimeString(lang)
      }
    },
    '@vuepress/google-analytics': {
      ga: 'UA-124896160-2'
    },
    '@vuepress/i18n-ui': {}
  }
}
