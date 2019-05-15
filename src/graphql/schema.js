import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typedefs';
import resolvers from './resolvers';
import Launch from '../models/Launch';

// Graphql Definition
const graphql = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        Launch: new Launch()
    })
})

export default graphql;
