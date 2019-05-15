// Schema definition
import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Launch {
        id: ID!
        mission: String
        year: String
        date: String
        success: Boolean
        rocket: Rocket
    }

    type Rocket {
        id: ID!
        name: String
        type: String
        description: String
    }

    type Query {
        hello:  String
        getLaunch(id: ID!): Launch!
        getLaunches: [Launch]!
        getRocket(id: ID!): Rocket!
        getRockets: [Rocket]!
    }
`;

export default typeDefs;