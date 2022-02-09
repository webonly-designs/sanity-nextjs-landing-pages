export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '620410047094e60078cecab0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-v55xyhzb',
                  apiId: '16a0c535-0b69-4148-9c2e-f23a7c8ad805'
                },
                {
                  buildHookId: '62041004de08a000a1ba3e79',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-epaqas6f',
                  apiId: '625ab1dc-aec4-468e-9dac-2352218a7c07'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/webonly-designs/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-epaqas6f.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
