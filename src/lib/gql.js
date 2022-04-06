import { GraphQLClient, gql } from 'graphql-request'

export const graphcms = new GraphQLClient(
  import.meta.env.VITE_GRAPHCMS_URL
)

export async function exampleQuery() {
  const query = gql`
    {
      projects {
        image {
          url(
            transformation: { document: { output: { format: png } } }
          )
        }
        body
        title
        main
      }
    }
  `
  const { projects } = await graphcms.request(query)
  return projects
}
