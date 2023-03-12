//imports
import { request, gql } from "graphql-request";
import axios from "axios";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  //create a query
  const query = gql`
    query MyQuery {
      # what do we want to fetch

      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  //from where
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  //create a query
  const query = gql`
    query GetPostDetails($slug: String!) {
      # what do we want to fetch
      post(where: { slug: $slug }) {
        #we need only those post that have this slug or url unique
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getRecentPosts = async () => {
  const query = gql`
        query GetPostDetails(){
            posts(orderBy: createdAt_ASC
            last:3  ){
              title
              featuredImage{
                url
              }
              createdAt
              slug 
            }
        }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { categories, slug });

  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const submitComment = async (obj) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  console.log(result, "this is JSONNNNNNNNNNNNNN1111111111!!!!!!");

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comment(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comment;
};

export const getFeaturedPosts = async () => {
  //create a query
  const query = gql`
    query GetFeaturedPost() {
      # what do we want to fetch

      posts(where: {featuredPost:true}){
        
        author {
              name
              photo {
                url
              }
            }
          
            slug
            title
            createdAt
            featuredImage {
              url
            }
           
          }
      }
       
  `;
  //from where
  const result = await request(graphqlAPI, query);

  return result.posts;
};
