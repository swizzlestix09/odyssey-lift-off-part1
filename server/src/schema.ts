import gql from 'graphql-tag';

export const typeDefs = gql`
  """
  A track is a group of modules that teaches about a specific topic
  """
  type Track {
    id: ID!
    "Track title"
    title: String!
    "Track author"
    author: Author!
    "The track's main illustration"
    thumbnail: String
    "Track duration in minutes"
    length: Int
    "Number of modules this track contains"
    modulesCount: Int
  }

  """
  Author of a complete Track or a Module
  """
  type Author {
    id: ID!
    "Author's full name"
    name: String!
    "Avatar URL for the author"
    photo: String
  }

  type Query {
    "Get all tracks for homepage grid"
    tracksForHome: [Track!]!
  }
`;
