import gql from 'graphql-tag';

//schema definitions go here

export const typeDefs = gql`
"A track is a group od Modules that teaches about aq specific topic"
type Query {
  "get all tracks for homepage grid"
  tracksForHome: [Track!]!
}
"a track is a group of modules that teaches about a specific topic"
type Track {
    id: ID!
    "track title"
    title: String!
    "track author"
    author: Author!
    "the tracks main illustration"
    thumbnail: String
    "tracks duration in minutes"
    length: Int
   "number of modules this track contains"
    modulesCount: Int
}

"Author of a complete Track or a Module"
type Author {
    id: ID!
    "Authors full name"
    name: String!
    "Avatar url for the author"
    photo: String
}
`;