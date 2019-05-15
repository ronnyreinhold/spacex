import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typedefs';
import resolvers from './resolvers';
import Launch from '../models/Launch';
import Rocket from '../models/Rocket';

// Graphql Definition
const graphql = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        Launch: new Launch(),
        Rocket: new Rocket()
    })
})

export default graphql;
