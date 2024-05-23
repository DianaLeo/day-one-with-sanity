import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'qqgdwdt3',
    dataset: 'production'
  },
  graphql:[
    {
      playground: true,
      tag: 'experiment',
      id: 'schema-experiment',
    }
  ]
})
