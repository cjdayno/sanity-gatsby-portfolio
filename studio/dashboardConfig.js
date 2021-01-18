export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60060edbfc21bdbca1a1a6d3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vwdev8bi',
                  apiId: 'a74c846b-1007-49d8-9ece-1409861f67a1'
                },
                {
                  buildHookId: '60060edbb454fc9cf95852dc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1fkpch3e',
                  apiId: '7de2ffd5-ffa9-4f8c-b9b8-0929da4c4e92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cjdayno/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1fkpch3e.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
