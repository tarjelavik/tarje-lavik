export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dfd2df6312244fba10b4f12',
                  title: 'Sanity Studio',
                  name: 'tarje-lavik-studio',
                  apiId: 'eb574154-e5e2-4b2f-bb6c-bb9ca905db93'
                },
                {
                  buildHookId: '5dfd2df6e0f80a2d4d286a5e',
                  title: 'Blog Website',
                  name: 'tarje-lavik',
                  apiId: 'ac9fa283-aae1-4539-9c75-ef25de2357ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tarjelavik/tarje-lavik',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://tarje-lavik.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
