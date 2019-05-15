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
    }

    type Query {
        hello:  String
        getLaunch(id: ID!): Launch
        getLaunches: [Launch]!
    }
`;

export default typeDefs;