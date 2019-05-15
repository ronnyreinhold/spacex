export default {
    Query: {
        hello: () => 'World',
        getLaunch: (_, { id }, { dataSources }) => { return dataSources.Launch.getLaunch(id) }
    }
}