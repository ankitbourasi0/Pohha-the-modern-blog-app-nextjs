/*****************************************************************
 * Any file inside the folder pages/api is mapped  to /api/* and *
 * will be treated as an API endpoint  instead of a page.        *
 ****************************************************************** */

import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;


export default async function comments(req,res) {
  const {name,email,slug,comment} = req.body
  console.log(req.body," bodyyyyyyyyyyyyyyyy")

  console.log(name,email,slug,comment,"hello")
  const graphQLClient = new GraphQLClient(graphqlAPI,  {
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
    },
  } );

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComments(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }   
  `

try {
  const result = await graphQLClient.request(query,req.body) 
  return res.status(200).send(result) 
} catch (error) {
  console.log(error)
  return res.status(500).send(error) 
       
}
}
